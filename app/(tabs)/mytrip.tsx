import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "~/components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "~/components/MyTrips/StartNewTripCard";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <SafeAreaView className="h-full p-6">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-3xl font-bold">My Trip</Text>
        <Ionicons name="add-circle" size={30} />
      </View>

      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </SafeAreaView>
  );
};

export default MyTrip;
