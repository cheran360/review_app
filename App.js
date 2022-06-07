import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

// expo install expo-app-loading

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        onError={(error) => console.warn(error)}
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
