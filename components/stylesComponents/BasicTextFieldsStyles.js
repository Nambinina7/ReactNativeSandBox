import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ModalContent = styled.View`
    padding: 20px;
    background-color: white;
    position: absolute;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
    elevation: 5;
    height: 40%;
`;

export const ModalTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
`;

export const ModalText = styled.Text`
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ButtonContainer = styled.View`
    align-items: center;
    margin-top: 20px;
`;

export const StyledButton = styled(Button)`
    padding-vertical: 10px;
    background-color: transparent;
`;

export const ButtonText = styled.Text`
    color: #fff;
`;
