import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: white;
  border-radius: 5px;
  border: 0.5px solid #bec3b9;
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 2;
`;

export const Title = styled.Text`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0.5px;
  color: #222222;
`;

export const Description = styled.Text`
  padding-left: 4px;
  font-family: Open Sans;
  font-style: normal;
  color: #545454;
`;

export const FooterContainer = styled.View`
  padding-top: 18px;
  padding-bottom: 12px;
`;
export const StatusContainer = styled.View`
  padding-top: 18px;
  paddingbottom: 12px;
  flexdirection: row;
`;
export const SubText = styled.Text`
  padding-left: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #222222;
`;
export const DateText = styled.Text`
  padding-left: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #545454;
`;

export const Bolinha = styled.View`
  margin: 2px 2px;
  background-color: ${props => props.statusColor};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 2;
`;

export default function ActivityCard({
  title,
  description,
  startDate,
  endDate,
  status
}) {
  function getStatus() {
    if (status === "doing") {
      return "orange";
    } else if (status === "done") {
      return "green";
    }
    // incomplete status, u can complete this task later
    else return "red";
  }
  return (
    <Container>
      <Title>{title} </Title>
      <Description>{description}</Description>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FooterContainer>
          <SubText>Começo</SubText>
          <DateText>{startDate}</DateText>
        </FooterContainer>
        <FooterContainer>
          <SubText>Fim</SubText>
          <DateText>{endDate}</DateText>
        </FooterContainer>
        <StatusContainer>
          <SubText>Status</SubText>
          <Bolinha statusColor={getStatus()} />
        </StatusContainer>
      </View>
    </Container>
  );
}
