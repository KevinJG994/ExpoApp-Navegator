import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const SettingsScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nos encontrarnos</Text>
            <Text style={styles.textStyle}>En el centro comercial Costanera Center</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={require('../assets/images/ubicacion.png')} 
                />
            </View>    
            <Text style={styles.textStyle}>Disfrute de  nuestras salas de cine.</Text>
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
    textStyle: {
        fontSize: 16,
        marginBottom: 10,
        color: '#2DCFCB',    
    },
    imageContainer: {
        margin: 30,
      },
      image: {
        width: 380,
        height: 540,
        borderRadius: 18,
        borderColor: '#2DCFCB',
        borderWidth: 2, 
    },
});

export default SettingsScreen;