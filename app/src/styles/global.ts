import { createGlobalStyle } from 'styled-components';

import { device } from './variables';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    overflow: hidden;

    @media ${device.mobileLM}, ${device.heightMobileLM} {
      overflow-y: visible;
    }
  }

  body {
    color: #000;
    /* font-size: 62.5%; */
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
