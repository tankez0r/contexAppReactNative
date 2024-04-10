import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../../config/app-theme'
import { profileStore } from '../../../config/store/store'

export const HomeScreen = () => {
    const { email, name } = profileStore()
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>name: {name}</Text>
            <Text style={styles.tittle}>email: {email}</Text>
        </View>
    )
}


