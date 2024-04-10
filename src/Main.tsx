import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './Navigator/BottomTabNavigator';


export const Main = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>



    )
}


const styles = StyleSheet.create({})