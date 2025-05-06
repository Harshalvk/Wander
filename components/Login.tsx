import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Button } from "../components/ui/button";

const Login = () => {
  const router = useRouter();

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
        <Button
          className="bg-blue-600 mt-48 rounded-xl"
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text className="text-[#ffff] text-lg">Get Started</Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;
