import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>I am Test Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 56,
    // backgroundColor: "lightgreen",
  },
});

export default Header;
