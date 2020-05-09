import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import Welcome from "./components/welcome-screen.js";

export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={{ backgroundColor: "#1565c0" }}
        titleStyle={{ color: "white" }}
      >
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
          <Scene key="welcome" component={Welcome} title="Home" />
        </Stack>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    tintColor: "white"
  }
};
