import React, {useState, useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from "../../contexts/UserContext";

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton, 
    SignMessageButtonText, 
    SignMessageButtonTextBold

} from './styles';

import Api from "../../Api";

import SignInput from "../../components/SignInput";
import { Text } from "react-native";



import Logo from '../../assets/logo.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'

export default () => {

    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailfield] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () =>{
        if(emailField != '' && passwordField != ''){

            let json = await Api.signIn(emailField, passwordField);
            console.log(json);

            if(json.token){
                await AsyncStorage.setItem('token',json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });


                navigation.reset({
                    routes:[{name: 'MainTab'}]
                });

            }else {
                alert('E-mail e/ou senha errados! ')
            }

        } else{
            alert("Preencha os campos!");
        }
    }
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });

    }
    

    return(
        <Container>
            <Logo width="100%" height="250" />

            <InputArea>
                <SignInput 
                    IconSvg={EmailIcon} 
                    placeholder="Digite seu email"  
                    value={emailField}
                    onChangeText={t=>setEmailfield(t)}
                />

                <SignInput 
                    IconSvg={LockIcon} 
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}