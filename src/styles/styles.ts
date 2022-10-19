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
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.woff) format('woff'),
        url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot);
    src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
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

const Span = css`
  span {
    height: 24px;
    color: #777d8c;
    cursor: pointer;
    border-radius: 3px;
  }
  span:hover {
    background: #dcdce2;
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
    height: 30px;
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
    // box-shadow: 0 3px 1px #d5d5d9;
    // margin-top: 5px;
  }

  div {
    // padding: 2px 0 0 5px;
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
    justify-content: space-between;
    margin-top: 8px;
  }
  ${Span}
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: #1c2a47;
  padding: 5px;
  position: relative;

  form {
    width: 90%;
  }
  h3 {
    width: 100%;
    cursor: pointer;
    padding-left: 3px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${Span}

  input {
    width: 100%;
    height: 24px;
    cursor: pointer;

    font-size: 1em;
    font-weight: bold;
  }
`;

export const ItemSection = styled.section`
  max-height: 155px;
  overflow-y: auto;
  padding: 4px 2px;
  
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #c2c2c2;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #7d7d7d;
  }
  ::-webkit-scrollbar-track {
    background: inherit;
  }
`;
export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: #fff;
  border-radius: 5px;
  margin: 0.5em 0px;
  color: #1c2a47;
  box-shadow: 0 2px 1px #d5d5d9;
  word-break: break-word;
  width: 98%;
  min-height: 30px;

  &:hover {
    background: #f4f5f7;
  }
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin: 0;
  }
  h3 {
    min-height: 30px;
    padding: 8px;
    font-size: 1em;
  }

  ${Span}
  span {
    height: 20px;
    margin-right: 5px;
  }
  span svg {
    font-size: 20px;
  }
`;
export const ArticleDiv = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  padding-right: 12%;
  textarea {
    width: 100%;
    height: 100%;
    font-size: 1em;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  ${Span}
  span {
    height: 20px;
  }
`;
export const Footer = styled.footer`
  padding: 5px 5px 5px 0;
  border-radius: 5px;
`;

export const AddItemDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    border-radius: 3px;
  }
  > div:hover {
    background-color: #dbdce1;
    color: #1c2a47;
    font-weight: bold;
  }
  
  ${Span}
`;
