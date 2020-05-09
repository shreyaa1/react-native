import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.signupText}>welcome on the website</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "blue"
  }
});
