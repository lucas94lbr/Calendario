import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Untitled() {
  return (
    <View style={styles.container}>
      <View style={styles.logoColumnRow}>
        <View style={styles.logoColumn}>
          <Image
            source={require("../assets/images/VCL.png")}
            resizeMode="contain"
            style={styles.logo}
          ></Image>
          <Image
            source={require("../assets/images/umbrasil-horizontal-branca_sem_fundo.png")}
            resizeMode="contain"
            style={styles.umb}
          ></Image>
        </View>
        <View style={styles.logoColumnFiller}></View>
        <Text style={styles.loremIpsum}>Calaendário Religioso Marista</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(113,89,193,1)"
  },
  logo: {
    width: 143,
    height: 149,
    marginLeft: 47
  },
  umb: {
    width: 236,
    height: 124,
    marginTop: 167
  },
  logoColumn: {
    width: 236,
    marginTop: 248,
    marginBottom: 176
  },
  logoColumnFiller: {
    flex: 1,
    flexDirection: "row"
  },
  loremIpsum: {
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    fontFamily: "roboto-700",
    textAlign: "center"
  },
  logoColumnRow: {
    height: 864,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 69
  }
});

export default Untitled;
