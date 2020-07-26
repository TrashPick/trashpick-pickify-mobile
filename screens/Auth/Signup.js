import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from "react-native";
import AuthContext from "../Auth/AuthContext";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TextInput from "../../components/TextInput";
import { AntDesign } from "@expo/vector-icons";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const renderBackBtn = () => {
    return (
      <View>
        {Platform.OS === "ios" ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.pop()}
          >
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableNativeFeedback
            onPress={() => navigation.pop()}
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
            useForeground={true}
          >
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="black" size={18} />
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    );
  };
  const emailChange = (target) => {
    setEmail(target.nativeEvent.text);
  };
  const passwordChange = (target) => {
    setPassword(target.nativeEvent.text);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          leftAction={renderBackBtn()}
          title="Create an account"
          type="auth"
        />
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center" }}
          behavior={Platform.OS === "android" ? "height" : "padding"}
          keyboardVerticalOffset={10}
        >
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 40,
            }}
          >
            <View style={styles.emailContainer}>
              <TextInput
                input="email"
                placeholder="E-mail"
                onChange={(value) => {
                  emailChange(value);
                }}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                input="name"
                placeholder="Username"
                onChange={(value) => {
                  setUsername(value.nativeEvent.text);
                }}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                input="password"
                placeholder="Password"
                onChange={(value) => {
                  passwordChange(value);
                }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={styles.more}>Already have an account?</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ padding: 10 }}
                onPress={() => {
                  navigation.navigate("Signin");
                }}
              >
                <Text style={[styles.more, { color: Colors.green }]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Button
              type="signup"
              onClick={async () => {
                if (email.length == 0) {
                  alert("Email is required");
                  return;
                } else if (password.length < 3) {
                  alert("Password is required");
                  return;
                } else if (username.length == 0) {
                  alert("User name required");
                  return;
                }
                const data = {
                  password: password.trim(),
                  username: username.trim(),
                  email: email.trim(),
                };
                await AsyncStorage.setItem(
                  "personalData",
                  JSON.stringify(data)
                );
                navigation.navigate("Verify");
              }}
              title="Sign Up"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    padding: 15,
  },
  emailContainer: {
    justifyContent: "center",
    paddingVertical: 20,
  },
  passwordContainer: {
    // paddingVertical:20
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  more: {
    fontFamily: "Medium",
    fontSize: Fonts.t2,
    textAlign: "center",
    letterSpacing: -0.2,
    color: Colors.grey,
  },
});
