import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={22} />
          ),
          tabBarLabel: "My Trip",
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="globe" size={22} />,
          tabBarLabel: "Discover",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man-profile" size={22} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;
