import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from "../utils/colors";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}/>
      <Image source={require("../assets/man.png")} style={styles.bannerImage}/>
      <Text style={styles.title}> Welcome Dear Visitors</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
    },
    logo: {
        height: 40,
        width: 150,
        marginVertical: 25,
    },
    bannerImage: {
        height: 250,
        width: 230,
        marginVertical: 30
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        paddingHorizontal: 30,
        textAlign: "center",
        color: colors.primary
    }
})