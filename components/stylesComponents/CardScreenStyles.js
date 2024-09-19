import styled from "styled-components/native";
import {colors} from "../utils/colors";

// Card in ImageCard screen
export const Card = styled.View`
    background-color: #fff;
    border-radius: 8px;
    shadow-color: #000;
    shadow-opacity: 0.25;
    width: 300px;
    padding: 16px;
    margin-bottom: 16px;
    align-items: center;
`;

// CardTitle in ImageCard screen
export const CardTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 16px;
`;
