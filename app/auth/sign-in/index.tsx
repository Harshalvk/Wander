import { View, Text } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import React from "react";

const SignInPage = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "#6C757D",
          width: 30,
          height: 30,
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronLeft size={25} fill={"#fff"} />
      </View>
      <Text>Sign in now</Text>
    </View>
  );
};

export default SignInPage;
