import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Colors from "../../constants/Colors";
import Header from "../../components/Header";
import Button from "../../components/Button";
// import Camera from "./Camera";
import LottieView from "lottie-react-native";
import * as lottie from "../../assets/LottieFiles/2.json";

function Request({ navigation }) {
  const [showCamera, setShowCamera] = useState(false);

  //   switchCamera = (value) => {
  //     setState(value);
  //   };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Header title="Request" type="App" /> */}
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        {/* <Camera showCamera={showCamera} switchState={switchCamera()} /> */}
        <View style={styles.screenContent}>
          <LottieView
            source={lottie}
            autoPlay
            loop
            style={{ height: 100, weight: 100 }}
          />
          <Text style={styles.heading}>Want to request pickup?</Text>
          <View style={{ paddingVertical: 40, justifyContent: "center" }}>
            <Text style={styles.slogan}>
              Start scheduling your first pickup on Pickify
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            type="signup"
            // onClick={switchCamera(true)}
            title="Take image"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Request;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    // flex:1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  screenContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: 90,
  },
  heading: {
    textAlign: "center",
    fontFamily: "Bold",
    fontSize: 16,
  },
  slogan: {
    fontFamily: "Medium",
    fontSize: 16,
  },
});
