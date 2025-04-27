import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "~/components/Button";

const MyTrip = () => {
  return (
    <SafeAreaView>
      <View className="p-8">
        <Text>MyTrip</Text>
        <Button>
          <Text className="text-white">Click me</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default MyTrip;
