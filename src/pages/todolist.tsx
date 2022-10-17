import React from "react";
import styled from "styled-components";

interface ISection {
  color?: string;
}

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  padding: 0.5em 0;
`;
const Section = styled.section<ISection>`
  width: 250px;
  background: #${({ color }) => color ? color : "eaecef"};
  border-radius: 5px;
  font-size: 0.8em;
  margin: 0 0.3em;
  padding: 5px;

  p {
    color: #fff;
    padding: 10px;
  }
`;
const Header = styled.header`
  font-weight: bold;
  color: #1c2a47;
  padding: 10px;
  cursor: grab;
`;
const Container = styled.div`
`;
const Article = styled.article`
  background: #fff;
  border-radius: 5px;
  margin: 0.5em 0px;
  padding: 8px;
  color: #1c2a47;
  box-shadow: 0 2px 1px #d5d5d9;
  `;
const Footer = styled.footer`
  color: #777d8c;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #dbdce1;
    color: #1c2a47;
    font-weight: bold;
  }
`;

const TodoList: React.FC = () => {

  return (
    <Main>
      <Section>
        <Header>
          <h2>New Issue</h2>
        </Header>
        <Container>
          <Article>테스트1</Article>
          <Article>테스트2</Article>
        </Container>
        <Footer>
          + Add a card
        </Footer>
      </Section>
      <Section>
        <Header>
          <h2>New Issue</h2>
        </Header>
        <Container>
          <Article>테스트2</Article>
        </Container>
        <Footer>
          + Add a card
        </Footer>
      </Section>
      <Section>
        <Header>
          <h2>New Issue</h2>
        </Header>
        <Container>
        </Container>
        <Footer>
          + Add a card
        </Footer>
      </Section>
      <Section color="a4a9ac">
        <p>
        + Add another list
        </p>
      </Section>
    </Main>
  );
};


export default TodoList;