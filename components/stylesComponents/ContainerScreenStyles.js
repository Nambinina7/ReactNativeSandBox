import styled from "styled-components/native";
import {colors} from "../utils/colors";
import {fonts} from "../utils/fonts";

// Container in Login and Signup screen
export const Container = styled.View`
    flex: 1;
    background-color: ${colors.white};
    padding: 20px;
`;

// TextContainer in Login and Signup screen
export const TextContainer = styled.View`
    margin-vertical: 20px;
`;

// FormContainer in Login and Signup screen
export const FormContainer = styled.View`
    margin-top: 20px;
`;

// InputContainer in Login and Signup screen
export const InputContainer = styled.View`
    border-width: 1px;
    border-color: ${colors.secondary};
    border-radius: 100px;
    padding-horizontal: 20px;
    flex-direction: row;
    align-items: center;
    padding: 2px;
    margin-vertical: 10px;
`;

// FooterContainer in Login and Signup screen
export const FooterContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-vertical: 20px;
    gap: 5px;
`;

// CardContainer in ImageCard screen
export const CardContainer = styled.ScrollView`
    flex: 1;
    background-color: #f5f5f5;
`;

// CardContent in ImageCard screen
export const CardContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

//HomeContainer
export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;