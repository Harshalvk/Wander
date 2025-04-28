import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useRouter } from "expo-router";

const StartNewTripCard = () => {
  const router = useRouter();
  return (
    <View className="px-5 mt-10">
      <Card className="py-3 flex items-center">
        <CardHeader>
          <CardTitle>
            <Ionicons name="location-sharp" size={28} />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <Text className="text-2xl font-semibold ">No trips planned yet</Text>
          <Text className="text-lg text-center text-muted-foreground">
            Looks like it's time to plane a new travel experience! Get started
            below
          </Text>
        </CardContent>
        <CardFooter>
          <Button
            className="rounded-full w-full bg-blue-600"
            onPress={() => router.push("/create-trip/search-place")}
          >
            <Text className="text-white">Start new trip</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
};

export default StartNewTripCard;
