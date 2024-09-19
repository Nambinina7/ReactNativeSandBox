import styled from "styled-components/native";
import {colors} from "../utils/colors";

//google Button in Login and Signup screen
export const GoogleButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    border-width: 2px;
    border-color: ${colors.primary};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
`;

// Button in Login and Signup screen
export const LoginButtonWrapper = styled.TouchableOpacity`
    background-color: ${colors.primary};
    border-radius: 100px;
    margin-top: 20px;
`;

// CardButton in ImageCard screen
export const CardButton = styled.TouchableOpacity`
    margin-top: 16px;
    background-color: ${colors.primary};
    padding: 10px 20px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`;

// ButtonText in ImageCard screen
export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    margin-left: 8px;
`;