import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectTravlers, SelectTravlersT } from "~/lib/constants";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import OptionCard from "~/components/CreateTrip/OptionCard";
import { CreateTripContext } from "~/context/CreateTripContext";
import { Button } from "~/components/ui/button";

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTravelers, setSelectedTravelers] = useState<SelectTravlersT>(
    SelectTravlers[0]
  );
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({
      ...tripData,
      travelers: selectedTravelers,
    });
  }, [selectedTravelers]);

  return (
    <SafeAreaView className="px-5 pt-12">
      <View className="h-full">
        <Text className="text-4xl mt-5 font-bold tracking-tight">
          Who's traveling?
        </Text>
        <Text className="mt-8 font-semibold text-2xl">
          Choose your travelers
        </Text>

        <FlatList
          data={SelectTravlers}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedTravelers(item)}>
              <OptionCard item={item} selectedTraveler={selectedTravelers} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Button
          className="rounded-full mt-4"
          onPress={() => router.push("/create-trip/SelectDates")}
        >
          <Text className="text-white">Continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SelectTraveler;
