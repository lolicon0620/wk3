import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>這是header</Text>
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
