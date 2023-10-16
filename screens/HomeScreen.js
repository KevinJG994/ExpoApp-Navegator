import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
    const navigation = useNavigation();
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (nickname.toLowerCase() === 'user' && password.toLowerCase() === 'user') {
            navigation.navigate("Stack");
        } else if (!nickname.trim() || !password.trim()) {
            Alert.alert("Error", "Debes completar todos los campos para iniciar sesión.");
        } else {
            Alert.alert("Error", "Credenciales incorrectas.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CineAsta</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={require('../assets/images/cine.png')} 
                />
            </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Usuario</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => setNickname(text)}
                            value={nickname}
                        />
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                            value={password}
                        />
                    </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#25292e',
    },
   
    title: {
        fontSize: 24,
        marginVertical: 20,
        color: "white",
    },
    inputContainer: {
        width: "80%",
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#2DCFCB',    
    },
    input: {
        height: 40,
        borderColor: '#2DCFCB',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "100%",
        color: "white",
    },
    button: {
        backgroundColor: '#2DCFCB',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    imageContainer: {
        margin: 30,
      },
      image: {
        width: 400,
        height: 240,
        borderRadius: 18,
        borderColor: '#2DCFCB',
        borderWidth: 2, 
    },
});
export default HomeScreen;
