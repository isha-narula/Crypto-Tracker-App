import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}>CryptoApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignText: "center"
    },
    header : {
        fontWeight="bold",
        fontSize:20.

    }
})

const {headerContainer,header} = styles;

export default Header;

