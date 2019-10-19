import styled from "styled-components/native";

const Action = styled.View`
  height: 35vh;
  padding: 80px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
`;

export { Action as Caixa };

const Container = styled.View`
  margin-bottom: 0;
  width: inherit;
  height: inherit;
  max-width: 800px;
  text-align: left;

  background-color: #fffff2;
  border-radius: 5px;
  border-color: #ddd;
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 2;
`;

export { Container as Conteudo };
