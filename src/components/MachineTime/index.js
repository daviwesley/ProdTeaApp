import React, { useState } from "react";
import {
  Image as Imagem,
  TouchableOpacity,
  ViewPropTypes,
  Text as Txt
} from "react-native";
import styled from "styled-components/native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import pt from "date-fns/locale/pt-BR";
const img = require("../../assets/calendar.png");

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #757575;
  border-radius: 4px; */
  height: 32px;
`;

export const Text = styled.Text`
  padding-left: 6px;
  color: #097551;
  padding-right: 6px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;

export const Image = styled(Imagem)`
  width: 22;
  height: 22;
  margin-right: 4px;
`;

const MachineTime = ({ styleContainer, styleText, styleImage }) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(
    format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: pt })
  );

  function handleDatePicked(date) {
    setDate(
      `${format(new Date(date), "d 'de' MMMM 'de' yyyy", { locale: pt })}`
    );
    hideDateTimePicker();
  }
  function hideDateTimePicker() {
    setVisible(false);
  }
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <Container style={styleContainer}>
        <Text style={styleText}>{date}</Text>
        {/* <Image source={img} style={[styleImage]} /> */}
        <DateTimePicker
          locale={"pt"}
          mode="datetime"
          isVisible={visible}
          onConfirm={handleDatePicked}
          onCancel={hideDateTimePicker}
        />
      </Container>
    </TouchableOpacity>
  );
};

MachineTime.propTypes = {
  styleText: Txt.propTypes.style,
  styleContainer: ViewPropTypes.style
};

export default MachineTime;
