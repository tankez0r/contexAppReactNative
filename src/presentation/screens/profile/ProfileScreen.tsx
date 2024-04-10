import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../../config/app-theme'
import { profileStore } from '../../../config/store/store'

export const ProfileScreen = () => {

    const { email, name, ChangeProfile } = profileStore()
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>name: {name}</Text>
            <Text style={styles.tittle}>email: {email}</Text>

            <Pressable onPress={(e) => { profileStore.setState(state => ({ name: "Juan du" })) }} style={styles.primaryButton}>
                <Text>
                    Cambiar Nombre
                </Text>
            </Pressable>

            <Pressable onPress={() => { profileStore.setState({ email: "juandu@correo.com" }) }} style={styles.primaryButton}>
                <Text>
                    Cambiar mail
                </Text>
            </Pressable>
            <Pressable onPress={(e) => { ChangeProfile() }} style={styles.primaryButton}>
                <Text>
                    regresar a john doe
                </Text>
            </Pressable>
        </View>
    )
}


