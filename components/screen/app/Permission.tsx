import React, { useState } from "react";
import { ScrollView } from "react-native";
import {Container, TextContainer} from "../../stylesComponents/ContainerScreenStyles";
import {
  HeadingText} from "../../stylesComponents/TextScreenStyles";


const Permission = () => {

  return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <TextContainer>
            <HeadingText>Formulaire de demande de pérmission:</HeadingText>
          </TextContainer>
        </Container>
      </ScrollView>
  );
};

export default Permission;


