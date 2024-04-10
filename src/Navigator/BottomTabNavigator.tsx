import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../presentation/screens/home/HomeScreen'
import { ProfileScreen } from '../presentation/screens/profile/ProfileScreen'
import { SettingScreen } from '../presentation/screens/settings/SettingScreen'

export const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen options={{ tabBarIcon: () => (<Text>Tab 1</Text>) }} name="Home" component={HomeScreen} />
            <Tab.Screen options={{ tabBarIcon: () => (<Text>Tab 2</Text>) }} name="Profile" component={ProfileScreen} />
            <Tab.Screen options={{ tabBarIcon: () => (<Text>Tab 3</Text>) }} name="Settings" component={SettingScreen} />

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({})