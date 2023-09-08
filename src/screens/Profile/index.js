import React from 'react';
import { Text , Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    
    Container,
    TextProfile,
    TextHome
  

} from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();

    const handelLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    }

    return(
        <Container>
            <TextProfile>Olá Pedro Lucas, bem vindo! </TextProfile>
           
            <Button title='Clique aqui para Sair' onPress={handelLogoutClick} />
        </Container>
    );
}