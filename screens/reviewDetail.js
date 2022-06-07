import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ReviewDetails() {
  return (
    <View style={styles.container}>
      <Text>Review Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    padding: 24,
  },
});
