import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MainTab from "./MainTab";
import PetCarer from "../screens/PetCarer"


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRoutName="Preload"
        screenOptions={{
            
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name = "PetCarer" component={PetCarer} />
    </Stack.Navigator>
);