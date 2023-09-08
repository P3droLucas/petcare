import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #D69A3A;

`;

export const Scrooler = styled.ScrollView`
    flex: 1;
    padding: 20px;

`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const LocationArea = styled.View`
    background-color: #966A24;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.TextInput`
    flex:1;
    font-size:16px;
    color: #FFFFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    top:0;
    z-index:9;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    width: 100px;
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    
    
`;

