import React, { useState } from "react";
import {
  TouchableOpacity,
  ScrollView, View, StyleSheet, ActivityIndicator
} from "react-native";
import { colors } from "../../utils/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {GoogleButtonContainer, LoginButtonWrapper} from "../../stylesComponents/ButtonScreenStyles";
import {Container, TextContainer, FormContainer, FooterContainer} from "../../stylesComponents/ContainerScreenStyles";
import {AccountText, ContinueText, GoogleText,
  HeadingText, LoginText, SignupText, StyledTextInput} from "../../stylesComponents/TextScreenStyles";
import { GoogleImage } from "../../stylesComponents/ImageScreenStyles";
import LinearGradient from "react-native-linear-gradient";

const SignupScreen = () => {
  const [secureEntery, setSecureEntery] = useState(true);
  const [count, setCount] = useState(0);

  return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <TextContainer>
            <HeadingText>Let's get started</HeadingText>
          </TextContainer>
          <FormContainer>
            <View style={styles.inputContainer}>
              <Ionicons name={"mail-outline"} size={30} color={colors.secondary} />
              <StyledTextInput
                  placeholder="Enter your email"
                  placeholderTextColor={colors.secondary}
                  keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <SimpleLineIcons name={"lock"} size={30} color={colors.secondary} />
              <StyledTextInput
                  placeholder="Enter your password"
                  placeholderTextColor={colors.secondary}
                  secureTextEntry={secureEntery}
              />
              <TouchableOpacity
                  onPress={() => {
                    setSecureEntery((prev) => !prev);
                  }}
              >
                <SimpleLineIcons name={"eye"} size={20} color={colors.secondary} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <SimpleLineIcons name={"screen-smartphone"} size={30} color={colors.secondary} />
              <StyledTextInput
                  placeholder="Enter your phone no"
                  placeholderTextColor={colors.secondary}
                  secureTextEntry={secureEntery}
                  keyboardType="phone-pad"
              />
            </View>
            {/*<LoginButtonWrapper>*/}
            {/*  <LoginText>Sign up</LoginText>*/}
            {/*</LoginButtonWrapper>*/}
            <TouchableOpacity>
              <LinearGradient colors={['#1F2CB4', '#2482DB']} style={styles.gradientButton}>
                <LoginText>Sign up</LoginText>
              </LinearGradient>
            </TouchableOpacity>
            <ContinueText>or continue with</ContinueText>
            <GoogleButtonContainer>
              <GoogleImage source={require("../../assets/google.png")} />
              <GoogleText>Google</GoogleText>
            </GoogleButtonContainer>
            <FooterContainer>
              <AccountText>Already have an account!</AccountText>
              <TouchableOpacity>
                <SignupText>Login</SignupText>
              </TouchableOpacity>
            </FooterContainer>
          </FormContainer>
        </Container>
      </ScrollView>
  );
};

export default SignupScreen;

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
});
