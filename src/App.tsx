import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoList from "./pages/todolist";


const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
      font-family: 'Nanum Gothic' !important;
    }
    html, body, div#root {
      height: 100%;
    }
    body {
      background: #858b90;
    }

    @font-face {
      font-family: 'Nanum Gothic';
      font-style: normal;
      font-weight: 400;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot);
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
    }

    @font-face {
      font-family: 'Nanum Gothic';
      font-style: normal;
      font-weight: 700;
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
      src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff2) format('woff2'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
           url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
};


export default App;