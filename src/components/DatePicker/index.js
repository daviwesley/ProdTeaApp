import React from "react";
import styled from "styled-components/native";
import { Text, TextInput } from "react-native-paper";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2;
  margin-bottom: 2;
`;

const DatePicker = ({ titulo, data }) => {
  return (
    <Container>
      <Text>{titulo}</Text>
      <Text>{data}</Text>
    </Container>
  );
};

export default DatePicker;
