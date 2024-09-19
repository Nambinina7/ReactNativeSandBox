import styled from "styled-components/native";
import {colors} from "../utils/colors";
import {fonts} from "../utils/fonts";

// HeadingText in Login and Signup screen
export const HeadingText = styled.Text`
    font-size: 32px;
    color: ${colors.primary};
    font-family: ${fonts.SemiBold};
`;

// StyledTextInput in Login and Signup screen
export const StyledTextInput = styled.TextInput`
    flex: 1;
    padding-horizontal: 10px;
    font-family: ${fonts.Light};
    background-color: 'yellow',
`;

// ForgotPasswordText in Login and Signup screen
export const ForgotPasswordText = styled.Text`
    text-align: right;
    color: ${colors.primary};
    font-family: ${fonts.SemiBold};
    margin-vertical: 10px;
`;


// LoginText in Login and Signup screen
export const LoginText = styled.Text`
    color: ${colors.white};
    font-size: 20px;
    font-family: ${fonts.SemiBold};
    text-align: center;
    padding: 10px;
`;

// ContinueText in Login and Signup screen
export const ContinueText = styled.Text`
    text-align: center;
    margin-vertical: 20px;
    font-size: 14px;
    font-family: ${fonts.Regular};
    color: ${colors.primary};
`;

// GoogleText in Login and Signup screen
export const GoogleText = styled.Text`
    font-size: 20px;
    font-family: ${fonts.SemiBold};
`;

// AccountText in Login and Signup screen
export const AccountText = styled.Text`
    color: ${colors.primary};
    font-family: ${fonts.Regular};
`;

// SignupText in Login and Signup screen
export const SignupText = styled.Text`
    color: ${colors.primary};
    font-family: ${fonts.Bold};
`;


// Title in home screen
export const Title = styled.Text`
  font-size: 40px;
  font-family: ${fonts.SemiBold};
  padding-horizontal: 20px;
  text-align: center;
  color: ${colors.primary};
  margin-top: 40px;
`;

// Title in home screen
export const Presentation = styled.Text`
  font-size: 18px;
  padding-horizontal: 20px;
  text-align: center;
  color: ${colors.secondary};
  font-family: ${fonts.Regular};
  margin-vertical: 20px;
`;

// Title in home screen
export const SubTitle = styled.Text`
  font-size: 18px;
  padding-horizontal: 20px;
  text-align: center;
  color: ${colors.secondary};
  font-family: ${fonts.Medium};
  margin-vertical: 20px;
`;

//PhotoItemTitle in PhotoItem components
export const PhotoItemTitle = styled.Text`
  font-size: 20px;
`;

//Item in PhotoItem components
export const Item = styled.View`
  background-color: ${colors.white};
  padding: 10px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
  flex-direction: row;
  align-items: center;
`;