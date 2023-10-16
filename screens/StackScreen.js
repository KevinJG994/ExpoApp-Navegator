import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const StackScreen = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
      navigation.navigate("HomeScreen");
  };

    return (
        <ScrollView style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.titleText}>
            Películas Disponibles
          </Text>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>Avatar</Text>
            <Image
              source={{
                uri:
                  'https://i.etsystatic.com/27725708/r/il/008c5a/2904647259/il_570xN.2904647259_ilg7.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}> La historia sigue a Jake Sully, un ex-marine parapléjico que se involucra en el programa Avatar para explorar Pandora con un avatar alienígena.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>El señor de los anillos</Text>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE42vSrrIpfjJ-kTylV3OL1ps93unpIcuvg&usqp=CAU',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}> Frodo es encargado de destruir un poderoso anillo mágico para evitar que caiga en manos del malvado Sauron, quien planea usarlo para gobernar el mundo.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>Trece vidas</Text>
            <Image
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod/images/poster-oficial-1659694154.jpg?crop=1.00xw:0.768xh;0,0.0974xh&resize=980:*',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>Basada en la historia real, "Trece vidas" es el relato del rescate de un equipo de fútbol de la cueva de Tham Luang, en Tailandia, tras quedar atrapado por las lluvias torrenciales y peligrosas inundaciones. </Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>Pulp Fiction</Text>
            <Image
              source={{
                uri:
                  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095733-51yHtvZGa5S._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>La película presenta varias tramas interconectadas que involucran a personajes diversos, como gánsteres, boxeadores, y criminales de poca monta, todos entrelazados en una serie de eventos inesperados y situaciones violentas.</Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>Bohemian Rhapsody</Text>
            <Image
              source={{
                uri:
                  'https://colonfilm.com/wp-content/uploads/2021/04/bohemian-rhapsody-poster.webp',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>Londres, 1970. El joven Farrokh, Freddie para los amigos, trabaja en el aeropuerto, estudia diseño gráfico y escribe canciones. </Text>
          </View>

          <View style={styles.imageContainer}>
            <Text style={styles.movieTitle}>Star Wars:                       The Force Awakens</Text>
            <Image
              source={{
                uri:
                  'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-14.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.descriptionText}>Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte, la galaxia tiene que enfrentarse a una nueva amenaza: el malvado Kylo Ren y la Primera Orden. </Text>
          </View>

          <Text
            style={styles.getStartedText}>
            ¡Disfrute nuestra selección de películas!
          </Text>
          
            <TouchableOpacity style={styles.button} onPress={goToHomeScreen}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 50,
    },
    getStartedText: {
      margin: 30,
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
      color: '#2DCFCB'
    },
    imageContainer: {
      backgroundColor: '#F0F3F4',
      padding: 10,
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 30,
      borderColor: '#2DCFCB',
      borderWidth: 3,
      width: 300,
      borderRadius: 18,
    },
    image: {
      borderColor: '#2DCFCB',
      borderWidth: 3,
      marginBottom: 5,
      width: 250,
      height: 300,
    },
    descriptionText: {
      margin: 10,
      fontSize: 14,
      textAlign: 'center',
    },
    titleText: {
        margin: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#2DCFCB'
    },
    movieTitle: {
      margin: 20,
      fontSize: 24,
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#2DCFCB',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginBottom: 25,
    },
      buttonText: {
      fontSize: 18,
      color: 'white',
    },
  });
export default StackScreen;