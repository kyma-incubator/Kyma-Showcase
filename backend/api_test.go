package main

import (
	"bytes"
	"github.com/gorilla/mux"
	"github.com/kyma-incubator/Kyma-Showcase/mocks"
	"github.com/pkg/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"net/http"
	"net/http/httptest"
	"testing"
)
//dodac testy sprawdzajace wszytkie case'y

func TestDBGetAllHandler(t *testing.T) {
	t.Run("should not return error when database is empty", func(t *testing.T) {

		//given
		req, err := http.NewRequest("GET", "v1/images", nil)

		require.NoError(t, err)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		dbManagerMock.On("GetAllKeys").Return(nil, nil)

		//when
		testSubject.DBGetAllHandler(recorder, req)

		//then
		dbManagerMock.AssertNumberOfCalls(t, "GetAllKeys",1)
		assert.Equal(t, http.StatusOK, recorder.Code)

	})

	t.Run("should return 500 code when value is empty", func(t *testing.T) {

		//given
		req, err := http.NewRequest("GET", "v1/images", nil)

		require.NoError(t, err)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		dbManagerMock.On("GetAllKeys").Return([]string{"1", "2", "3"}, nil)
		dbManagerMock.On("GetFromDB", "1").Return("", errors.New("value is empty"))
		dbManagerMock.On("GetFromDB", "2").Return("", errors.New("value is empty"))
		dbManagerMock.On("GetFromDB", "3").Return("", errors.New("value is empty"))
		//handler := http.HandleFunc(DBGetAllHandler)

		//when
		testSubject.DBGetAllHandler(recorder, req)

		//then //czy metody na mocku zostaly wywolane!!! assert
		dbManagerMock.AssertNumberOfCalls(t, "GetAllKeys",1)
		dbManagerMock.AssertCalled(t, "GetFromDB","1")
		dbManagerMock.AssertNotCalled(t, "GetFromDB","2")
		dbManagerMock.AssertNotCalled(t, "GetFromDB","3")
		dbManagerMock.AssertNumberOfCalls(t, "GetFromDB",1) // 1 poniewaz jest return po pierwszej pustej wartosci
		assert.Equal(t, http.StatusInternalServerError, recorder.Code)

	})

	t.Run("should return 500 code when is error during type assertion", func(t *testing.T) {

		//given
		req, err := http.NewRequest("GET", "v1/images", nil)
		require.NoError(t, err)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		dbManagerMock.On("GetAllKeys").Return([]string{"1"}, nil)
		dbManagerMock.On("GetFromDB", "1").Return(100, nil)
		
		//when
		testSubject.DBGetAllHandler(recorder,req)
		
		//then
		dbManagerMock.AssertNumberOfCalls(t, "GetAllKeys",1)
		dbManagerMock.AssertCalled(t, "GetFromDB","1")
		dbManagerMock.AssertNumberOfCalls(t, "GetFromDB",1)
		assert.Equal(t,http.StatusInternalServerError,recorder.Code)
	})

	t.Run("should return JSON array compatible with given data ", func(t *testing.T) {

		//given
		expected := `[{` +
			`"url":"raccoon.com",` +
			`"gcp":"image.png",`+
			`"img":"image.png"` +
			`},`+
			`{`+
			`"url":"raccoon.com",`+
			`"gcp":"image2.png",`+
			`"img":"image2.png"`+
			`}]`

		req, err := http.NewRequest("GET", "v1/images", nil)
		require.NoError(t, err)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		dbManagerMock.On("GetAllKeys").Return([]string{"1","2"}, nil)

		firstReturn := `
			{
				"url":"raccoon.com",
				"gcp":"image.png",
				"img":"image.png"
			}`

		secondReturn := `
			{
				"url":"raccoon.com",
				"gcp":"image2.png",
				"img":"image2.png"
			}
			`

		dbManagerMock.On("GetFromDB", "1").Return(firstReturn, nil)
		dbManagerMock.On("GetFromDB", "2").Return(secondReturn, nil)

		//when
		testSubject.DBGetAllHandler(recorder,req)

		//then
		dbManagerMock.AssertNumberOfCalls(t, "GetAllKeys",1)
		dbManagerMock.AssertCalled(t, "GetFromDB","1")
		dbManagerMock.AssertCalled(t, "GetFromDB","2")
		dbManagerMock.AssertNumberOfCalls(t, "GetFromDB",2)
		//dbManagerMock.AssertExpectations(t)
		assert.Equal(t,expected,recorder.Body.String())
	})
}

func TestDBPostHandler(t *testing.T) {
	t.Run("should return 400 error when unable to decode json from request", func(t *testing.T) {
		//given
		var jsonStr = []byte(`{"test":"test"}`)
		req, err := http.NewRequest("POST", "v1/images/{id}", bytes.NewBuffer(jsonStr))
		require.NoError(t, err)
		vars := map[string]string{
			"id": "1",
		}
		req = mux.SetURLVars(req, vars)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)

		//when
		testSubject.DBPostHandler(recorder, req)

		//then
		dbManagerMock.AssertNumberOfCalls(t, "InsertToDB",0)
		assert.Equal(t, http.StatusBadRequest, recorder.Code)
	})
	t.Run("should return 500 error when unable to insert json to db", func(t *testing.T) {

		//given
		var jsonStr = `{"url":"raccoon.com","gcp":"image.png","img":"image.png"}`
		req, err := http.NewRequest("POST", "/v1/images/{id}", bytes.NewBuffer([]byte(jsonStr)))
		require.NoError(t, err)
		vars := map[string]string{
			"id": "1",
		}
		req = mux.SetURLVars(req, vars)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		error :=  errors.New("failed to insert json to db")
		dbManagerMock.On("InsertToDB", "1",jsonStr).Return(error)

		//when
		testSubject.DBPostHandler(recorder, req)

		//then
		dbManagerMock.AssertNumberOfCalls(t, "InsertToDB",1)
		assert.Equal(t,"POST: failed to insert values to database: "+ error.Error() + "\n", recorder.Body.String())
		assert.Equal(t, http.StatusInternalServerError, recorder.Code)

	})

	//TODO add returned id checking
	t.Run("should return 200 when request is correct", func(t *testing.T) {

		//given
		var jsonStr = `{"url":"raccoon.com","gcp":"image.png","img":"image.png"}`
		req, err := http.NewRequest("POST", "/v1/images/{id}", bytes.NewBuffer([]byte(jsonStr)))
		require.NoError(t, err)
		vars := map[string]string{
			"id": "1",
		}
		req = mux.SetURLVars(req, vars)
		recorder := httptest.NewRecorder()
		dbManagerMock := mocks.DBManager{}
		testSubject := NewHandler(&dbManagerMock)
		dbManagerMock.On("InsertToDB", "1",jsonStr).Return(nil)

		//when
		testSubject.DBPostHandler(recorder, req)

		//then
		dbManagerMock.AssertNumberOfCalls(t, "InsertToDB",1)
		assert.Equal(t,"", recorder.Body.String())//change to id checking
		assert.Equal(t, http.StatusOK, recorder.Code)

	})

}