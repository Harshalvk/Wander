import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Button({
  onPress,
  children,
}: {
  onPress?: () => void;
  children: React.ReactNode;
}) {
  return (
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
      onPress={onPress}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "geist-medium",
          fontSize: 18,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
