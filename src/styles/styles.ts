import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { ISection } from "../interface/interface";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
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
        // url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff2) format('woff2'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
        // url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff2) format('woff2'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.woff) format('woff'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.ttf) format('truetype');
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  padding: 0.5em 0;
`;
export const KanbanWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const CommonSection = css`
  width: 250px;
  border-radius: 5px;
  font-size: 0.8em;
  margin: 0 0.3em;
  padding: 5px;

  button {
    background: #3477bb;
    color: #fff;
    padding: 7px 10px;
    border: none;
    border-radius: 3px;
    margin: 0;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 28px;
    border: none;
    border-radius: 3px;
    padding: 0 3px;
  }
`;
export const Section = styled.section`
  ${CommonSection}
  background: #eaecef;
  textarea {
    width: 98%;
    height: 56px;
    resize: none;
    border: none;
    border-radius: 8px;
    padding: 8px;
    color: #1c2a47;
    box-shadow: 0 3px 1px #d5d5d9;
    margin-top: 5px;
  }

  div {
    padding-left: 5px;
  }
`;

export const AddSection = styled.section<ISection>`
  ${CommonSection}
  background: #${({ isAdding }) => isAdding ? "eaecef" : "a4a9ac"};
  cursor: ${({ isAdding }) => isAdding ? "normal" : "pointer"};
  p {
    color: #fff;
    padding: 10px;
  }
  div div {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  div svg {
    cursor: pointer;
    color: #475068;
    margin-left: 0.1em;
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #1c2a47;
  padding: 5px;
  
  form {
    width: 80%;
  }
  h3 {
    width: 100%;
    cursor: pointer;
    padding-left: 3px;
  }
  span {
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 26px;
    cursor: pointer;

    font-size: 1em;
    font-weight: bold;
  }
`;

export const ItemSection = styled.section`
  padding-bottom: 0.3em;
  max-height: 180px;
  overflow-y: auto;
`;
export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 30px;

  background: #fff;
  border-radius: 5px;
  margin: 0.5em 0px;
  color: #1c2a47;
  box-shadow: 0 2px 1px #d5d5d9;
  word-break: break-word;
  width: 98%;

  &:last-child {
    margin: 0;
  }
  form {
    width: 100%;
  }
  span {
    padding: 8px;
    font-size: 1em;
  }
  svg {
    width: 12%;
    font-size: 16px;
    padding-right: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    padding: 8px;
    font-size: 1em;
  }
`;
export const Footer = styled.footer`
  color: #777d8c;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }
  div.add_item {
    margin: 0 -5px;
    padding-top: 5px;
    svg {
      margin-left: 0.1em;
    }
  }
  div.new_item {
    cursor: pointer;
    padding: 5px;
  }
  div.new_item:hover {
    background-color: #dbdce1;
    color: #1c2a47;
    font-weight: bold;
  }
  svg {
    font-size: 20px;
  }
  > svg {
    margin: 0 5px;
    cursor: pointer;
  }
`;