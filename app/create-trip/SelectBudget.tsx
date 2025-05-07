import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import { SelectBudgeOption, SelectBudgeOptionT } from "~/lib/constants";
import OptionCard from "~/components/CreateTrip/OptionCard";
import { CreateTripContext } from "~/context/CreateTripContext";
import { Button } from "~/components/ui/button";

const SelectBudget = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectedBudget, setSelectedBudget] = useState<SelectBudgeOptionT>(
    SelectBudgeOption[0]
  );

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
      budget: selectedBudget.title,
    });
  }, [selectedBudget]);

  return (
    <SafeAreaView className="px-5 pt-12 h-screen">
      <View className="h-full flex justify-between">
        <Text className="text-4xl mt-5 font-bold tracking-tight">Budget</Text>
        <Text className="text-xl mt-4">
          Choose spending habits for your trip
        </Text>

        <FlatList
          data={SelectBudgeOption}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedBudget(item)}>
              <OptionCard item={item} selectedOption={selectedBudget} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Button
          className="rounded-full mt-4 bg-blue-600"
          onPress={() => router.push("/create-trip/ReviewTrip")}
        >
          <Text className="text-white">Continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SelectBudget;
