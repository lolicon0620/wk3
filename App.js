import React from "react";
import { StyleSheet } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Navigation from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>{}
      <Navigation />{}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
