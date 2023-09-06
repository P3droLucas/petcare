import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #D69A3A; 
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;

`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #A17732;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #111;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 30px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #111;

`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #111;
    font-weight: bold;
    margin-left: 5px;

`;


/**Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton, 
    SignMessageButtonText, 
    SignMessageButtonTextBold */