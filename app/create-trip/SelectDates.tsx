import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { Button } from "~/components/ui/button";
import moment, { Moment } from "moment";
import { CreateTripContext } from "~/context/CreateTripContext";

const SelectDates = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date: Date, type: string) => {
    if (type === "START_DATE") setStartDate(moment(date));
    else setEndDate(moment(date));
  };
  const onDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select start and end date", 500);
      return;
    }
    const totalNoOfDays = endDate?.diff(startDate, "days");

    if (!totalNoOfDays) {
      ToastAndroid.show("Please select start and end date", 500);
      return;
    }

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });

    router.push("/create-trip/SelectBudget");
  };

  return (
    <SafeAreaView className="mt-12 p-7 h-screen flex justify-between">
      <View>
        <Text className="text-3xl font-bold tracking-tighter">
          Travel Dates
        </Text>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          selectedRangeStyle={{
            backgroundColor: "#2763eb",
          }}
          selectedDayTextStyle={{
            color: "#fff",
          }}
        />
      </View>
      <Button
        className="rounded-full mt-4 bg-blue-600"
        onPress={onDateSelectionContinue}
      >
        <Text className="text-white">Continue</Text>
      </Button>
    </SafeAreaView>
  );
};

export default SelectDates;
