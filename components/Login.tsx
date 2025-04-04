import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/spl1.png")}
        style={{
          width: "100%",
          height: 500,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <View
        style={{
          width: "auto",
          height: 350,
          padding: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            gap: 18,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontFamily: "geist-bold",
              textAlign: "center",
            }}
          >
            Life is short and the {"\n"} world is{" "}
            <Text
              style={{
                color: "#FF7029",
              }}
            >
              wide
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: "geist-medium",
              fontSize: 14,
              color: "#6C757D",
              textAlign: "center",
            }}
          >
            Wander offers personalized, reliable, and trustworthy tour planning
            powered by the intelligence of AI. Your next adventure awaits!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "#0D6EFD",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "geist-medium",
              fontSize: 18,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
