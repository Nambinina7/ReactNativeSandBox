import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import LinearGradient from 'react-native-linear-gradient'; // Import du LinearGradient
import {
  GoogleButtonContainer,
  LoginButtonWrapper,
} from "../../stylesComponents/ButtonScreenStyles";
import {
  Container,
  TextContainer,
  FormContainer,
  FooterContainer,
} from "../../stylesComponents/ContainerScreenStyles";
import {
  AccountText,
  ContinueText,
  ForgotPasswordText,
  GoogleText,
  HeadingText,
  LoginText,
  SignupText,
  StyledTextInput,
} from "../../stylesComponents/TextScreenStyles";
import { GoogleImage } from "../../stylesComponents/ImageScreenStyles";
import { colors } from "../../utils/colors";
import { useLogin } from "../../hooks/useLogin";

const LoginScreen = () => {
  const { secureEntry, setSecureEntry, username, setUsername, password, setPassword, handleLogin } = useLogin();
  const [isLoading, setIsLoading] = useState(false);

  const onLoginPress = async () => {
    setIsLoading(true);
    try {
      await handleLogin();
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Container>
        <TextContainer>
          <HeadingText>Hey, Welcome Back</HeadingText>
        </TextContainer>
        <FormContainer>
          <View style={styles.inputContainer}>
            <Ionicons name={"person-outline"} size={30} color={colors.secondary} />
            <StyledTextInput
                placeholder="Enter your username"
                placeholderTextColor={colors.secondary}
                value={username}
                onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name={"lock"} size={30} color={colors.secondary} />
            <StyledTextInput
                placeholder="Enter your password"
                placeholderTextColor={colors.secondary}
                secureTextEntry={secureEntry}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                onPress={() => {
                  setSecureEntry((prev) => !prev);
                }}
            >
              <SimpleLineIcons name={"eye"} size={20} color={colors.secondary} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
          </TouchableOpacity>

          {/* Button with LinearGradient and TouchableOpacity */}
          <TouchableOpacity onPress={onLoginPress} disabled={isLoading}>
            <LinearGradient colors={['#1F2CB4', '#2482DB']} style={styles.gradientButton}>
              {isLoading ? (
                  <ActivityIndicator size="small" color={colors.white} style={styles.activityIndicator} />
              ) : (
                  <LoginText>Login</LoginText>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <ContinueText>or continue with</ContinueText>
          <GoogleButtonContainer>
            <GoogleImage source={require("../../assets/google.png")} />
            <GoogleText>Google</GoogleText>
          </GoogleButtonContainer>
          <FooterContainer>
            <AccountText>Don’t have an account?</AccountText>
            <TouchableOpacity>
              <SignupText>Sign up</SignupText>
            </TouchableOpacity>
          </FooterContainer>
        </FormContainer>
      </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginVertical: 10,
  },
  gradientButton: {
    borderRadius: 25,
    padding: 2,
    marginVertical: 10,
    height: 50, // Make sure the button has consistent height
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    height: 24,
    width: 24,
  },
  buttonText: {
    fontSize: 18,
  },
});
