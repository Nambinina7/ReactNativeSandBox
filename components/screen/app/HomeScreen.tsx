import React from "react";
import {HomeContainer} from "../../stylesComponents/ContainerScreenStyles";
import {Title, Presentation, SubTitle} from "../../stylesComponents/TextScreenStyles";

const HomeScreen = () => {
  return (
      <HomeContainer>
        <Title>Bienvenue dans l'application!</Title>
        <Presentation>
          Cette application est conçue pour vous aider à [fonctionnalité principale de l'application].
          Profitez de toutes ses fonctionnalités pour rendre votre vie plus facile et organisée.
        </Presentation>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore
        </SubTitle>
      </HomeContainer>
  );
};

export default HomeScreen;

