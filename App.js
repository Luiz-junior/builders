import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { LinearGradient } from "expo-linear-gradient";
import { Provider } from "react-redux";

import store from "./src/store";
import Home from "./src/screens/Home/home";

const App = () => {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  useEffect(() => {
    const handleGetCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const locationData = await (
        await Location.getCurrentPositionAsync({})
      ).coords;

      setLocation(locationData);
      setLoading(false);
    };

    handleGetCurrentLocation();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <LinearGradient
          colors={["#6d3771", "#c57172", "#fa843b"]}
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            {loading ? (
              <Text style={styles.loadingText}>Carregando...</Text>
            ) : (
              <Home location={location} errorMsg={errorMsg} />
            )}
          </View>
        </LinearGradient>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default App;
