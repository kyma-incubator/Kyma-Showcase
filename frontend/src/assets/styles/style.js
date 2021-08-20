import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Button = styled.button`
  border-radius: 25px;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 15px;
  line-height: 15px;
  transition: background-color 0.2s;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: rgb(255, 255, 255);
  height: 30px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
  &:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const Loader = styled.div`
  position: relative;
  width: 5vh;
  height: 5vh;
  border: 0.8vh solid rgba(0, 0, 0, 0.2);
  border-left: 0.8vh solid #000000;
  border-radius: 50%;
  animation: load8 1.1s infinite linear;
  transition: opacity 0.3s;
  margin-top: 10%;

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
