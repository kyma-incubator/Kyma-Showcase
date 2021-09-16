import { FooterSection, Logo } from './Footer.styles';

const kymaURL = 'https://kyma-project.io/';

const Footer = () => (
  <FooterSection>
    <Logo>
      <a href={kymaURL}>
        <svg width="100%" height="100%" viewBox="0 0 79 101">
          <polygon
            fill-rule="nonzero"
            points="17.63 97.555 17.63 85.585 20.265 85.585 20.265 90.535 24.265 85.585 27.335 85.585 23.28 90.26 27.78 97.555 24.78 97.555 21.575 92.25 20.265 93.725 20.265 97.555"
          ></polygon>
          <path
            d="M27.57,100.545 L28.115,98.545 C28.235,98.58 28.445,98.625 28.73,98.685 C29.0595481,98.7479157 29.3945139,98.7780627 29.73,98.775 C29.9684452,98.7863649 30.2049554,98.7272374 30.41,98.605 C30.6181444,98.4561326 30.7725058,98.2438857 30.85,98 L31.015,97.58 L27.715,88.915 L30.4,88.915 L32.29,94.51 L32.325,94.51 L34.225,88.915 L36.725,88.915 L33.105,98.415 C32.9677072,98.7622287 32.8004073,99.0968285 32.605,99.415 C32.4462893,99.7115869 32.2421543,99.9815174 32,100.215 C31.7514578,100.428834 31.4623691,100.590383 31.15,100.69 C30.7832113,100.806593 30.399804,100.862331 30.015,100.855 C29.4993733,100.865886 28.9838447,100.829062 28.475,100.745 C28.1,100.675 27.8,100.61 27.57,100.545 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M38.21,97.555 L38.21,88.935 L40.815,88.935 L40.815,90.28 C40.9563062,90.1011035 41.1118103,89.9338948 41.28,89.78 C41.4722776,89.5921468 41.6833914,89.4245962 41.91,89.28 C42.1560443,89.1259296 42.419568,89.0017209 42.695,88.91 C43.0002236,88.8114616 43.3192742,88.7625067 43.64,88.765 C44.2163074,88.7243595 44.7906184,88.8679372 45.28,89.175 C45.6458978,89.4439861 45.9017366,89.8366277 46,90.28 C46.135,90.125 46.29,89.955 46.47,89.78 C46.6621144,89.589898 46.8751382,89.4221627 47.105,89.28 C47.3527996,89.1259051 47.6179805,89.0017064 47.895,88.91 C48.2018176,88.8109316 48.522599,88.7619702 48.845,88.765 C49.2258182,88.7567798 49.6045756,88.8230198 49.96,88.96 C50.2644593,89.0760713 50.5369542,89.262876 50.755,89.505 C50.9675201,89.7463667 51.1245394,90.031391 51.215,90.34 C51.3186759,90.6836357 51.3692591,91.0410905 51.365,91.4 L51.365,97.56 L48.765,97.56 L48.765,92.06 C48.781632,91.7523043 48.7178745,91.4455792 48.58,91.17 C48.3984234,90.9444283 48.1118759,90.8305683 47.825,90.87 C47.511686,90.8700481 47.204198,90.9546936 46.935,91.115 C46.6402716,91.2963158 46.3624816,91.5038215 46.105,91.735 L46.105,97.535 L43.5,97.535 L43.5,92.035 C43.5190157,91.7271287 43.4551307,91.4197903 43.315,91.145 C43.1356268,90.9194277 42.8504581,90.8053602 42.565,90.845 C42.2482604,90.8429825 41.9370118,90.9277112 41.665,91.09 C41.366164,91.2721854 41.083466,91.4796087 40.82,91.71 L40.82,97.51 L38.21,97.555 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M53.195,95.35 C53.175765,94.3942878 53.6775756,93.5036697 54.505,93.025 C55.3816667,92.465 56.7666667,92.1083333 58.66,91.955 L58.66,91.75 C58.6728916,91.4719849 58.5779589,91.1997252 58.395,90.99 C58.1467128,90.7796461 57.8239025,90.6786552 57.5,90.71 C56.974916,90.7050271 56.4543254,90.8071037 55.97,91.01 C55.5027524,91.2045344 55.0651444,91.463733 54.67,91.78 L53.565,90.28 C53.799262,90.0774838 54.0464507,89.8904222 54.305,89.72 C54.5991528,89.5254036 54.9104424,89.3580436 55.235,89.22 C55.613711,89.0647583 56.0074768,88.949142 56.41,88.875 C56.8913585,88.7848512 57.3802866,88.7413165 57.87,88.745 C59.05,88.745 59.905,89.03 60.42,89.6 C60.9867048,90.3144606 61.2650132,91.2153948 61.2,92.125 L61.2,95.44 C61.1967419,95.865657 61.2150988,96.2912048 61.255,96.715 C61.2784076,96.997694 61.3423975,97.2755448 61.445,97.54 L58.855,97.54 C58.805,97.355 58.755,97.16 58.715,96.955 C58.6774556,96.7302983 58.6590562,96.5028147 58.66,96.275 C58.2959139,96.7051129 57.8486182,97.057167 57.345,97.31 C56.8177288,97.5552042 56.2413817,97.6766305 55.66,97.665 C55.3351668,97.6680405 55.012197,97.6156213 54.705,97.51 C54.416281,97.4130952 54.1495197,97.2601747 53.92,97.06 C53.6905923,96.8577165 53.5094798,96.6065512 53.39,96.325 C53.2575093,96.0172198 53.1910779,95.6850627 53.195,95.35 Z M55.735,94.9 C55.7177675,95.1388129 55.8163652,95.3713548 56,95.525 C56.2011779,95.6673942 56.4437088,95.7394505 56.69,95.73 C57.0886307,95.7407027 57.4851963,95.6692188 57.855,95.52 C58.1543624,95.3912277 58.4272956,95.2081421 58.66,94.98 L58.66,93.385 C57.887574,93.4221766 57.1291919,93.6054099 56.425,93.925 C56.0248355,94.0880004 55.755627,94.4684038 55.735,94.9 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M54.23,76.625 L25.045,76.625 C23.112623,76.6311795 21.2842969,75.7501918 20.085,74.235 L1.885,51.42 C0.678644631,49.9126481 0.227442674,47.9365677 0.66,46.055 L7.16,17.6 C7.58597048,15.7149994 8.85160303,14.1288136 10.595,13.295 L36.885,0.63 C38.622554,-0.208082113 40.647446,-0.208082113 42.385,0.63 L68.68,13.295 C70.423379,14.127617 71.6878692,15.7146812 72.11,17.6 L78.61,46.055 C79.0425573,47.9365677 78.5913554,49.9126481 77.385,51.42 L59.185,74.235 C57.9877454,75.7500037 56.1609627,76.631136 54.23,76.625 Z M38.04,3.035 L11.745,15.7 C10.729882,16.1820976 9.99250836,17.1038146 9.745,18.2 L3.245,46.655 C3.00931244,47.7494197 3.28746851,48.8915175 4,49.755 L22.195,72.57 C22.8905374,73.4477448 23.9500902,73.9581728 25.07,73.955 L54.255,73.955 C55.3721409,73.957112 56.4290769,73.4488989 57.125,72.575 L75.32,49.755 C76.0113143,48.8773318 76.2619381,47.7310964 76,46.645 L69.5,18.19 C69.2538773,17.0931486 68.516072,16.1708919 67.5,15.69 L41.23,3.035 C40.2219309,2.55017307 39.0480691,2.55017307 38.04,3.035 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M17.955,29.59 L17.955,45.845 C19.053563,45.2878998 20.2682539,44.9983614 21.5,45 L25,45 C30.775,45 34.65,43.22 37.95,40.755 C37.005,39.915 36.085,39.06 35.2,38.21 C30.73,33.96 26.07,29.945 17.955,29.59 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M61.315,29.725 C53.315,30.12 49.135,34.1 44.705,38.3 C39.87,42.885 34.87,47.63 24.965,47.63 L21.5,47.63 C19.5804519,47.6620883 18.0320883,49.2104519 18,51.13 L18,55.58 L61.335,55.58 L61.315,29.725 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M38.785,28.105 C35.09,24.57 31.385,21.035 24,21.035 L24,28.035 C27.1398971,28.9457617 30.05416,30.5042366 32.555,32.61 C35,31.535 36.89,29.895 38.785,28.105 Z"
            fill-rule="nonzero"
          ></path>
          <path
            d="M54.125,22.255 C48,22.61 44.735,25.71 41.315,29 C39.315,30.93 37.205,32.91 34.495,34.34 C35.28,35.055 36.05,35.78 36.81,36.505 C37.77,37.43 38.77,38.365 39.81,39.255 C40.865,38.345 41.885,37.385 42.915,36.405 C46.115,33.37 49.415,30.285 54.145,28.535 L54.125,22.255 Z"
            fill-rule="nonzero"
          ></path>
        </svg>
      </a>
    </Logo>
    <h4>
      Project by Raccoons
      <br />
      2021
    </h4>
  </FooterSection>
);

export default Footer;
