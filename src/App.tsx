import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoList from "./pages/todolist";


const GlobalStyles = createGlobalStyle`
    ${reset}
    html, body, div#root {
      height: 100%;
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