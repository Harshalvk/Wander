import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { CreateTripContext } from "~/context/CreateTripContext";
import moment from "moment";
import { Button } from "~/components/ui/button";

const ReviewTrip = () => {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <SafeAreaView className="px-5 pt-12 h-screen">
      <View className="h-full flex justify-between">
        <View>
          <View>
            <Text className="text-4xl my-5 font-bold tracking-tight">
              Review your trip
            </Text>
            <Text className="text-xl my-4">
              Before generating your trip, please review your selection
            </Text>
          </View>
          <View>
            <ReviewTripOption
              icon="📍"
              title="Destination"
              data={tripData.locationInfo.name}
            />
            <ReviewTripOption
              icon="📆"
              title="Travel Date"
              data={
                moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData.endDate).format("DD MMM") +
                ` (${tripData.totalNoOfDays} days)`
              }
            />
            <ReviewTripOption
              icon="🧳"
              title="Who is travelling?"
              data={tripData.travelers.title}
            />
            <ReviewTripOption icon="💵" title="Budget" data={tripData.budget} />
          </View>
        </View>
        <Button className="rounded-full mt-4 bg-blue-600">
          <Text className="text-white">Continue</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

function ReviewTripOption({
  title,
  data,
  icon,
}: {
  title: string;
  data: string;
  icon: string;
}) {
  return (
    <View className="flex flex-row items-center mt-4">
      <Text className="text-4xl">{icon}</Text>
      <View className="ml-4">
        <Text className="text-xl tracking-tight">{title}</Text>
        <Text className="text-2xl font-bold">{data}</Text>
      </View>
    </View>
  );
}

export default ReviewTrip;
