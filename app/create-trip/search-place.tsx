import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "~/context/CreateTripContext";

const SearchPlace = () => {
  const navigation = useNavigation();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  useEffect(() => {
    console.log("TRIPDATA", tripData);
  }, [tripData]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 5 }}>
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search"
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              //@ts-ignore
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY!,
          language: "en",
        }}
        styles={{
          container: { flex: 1, paddingHorizontal: 24, paddingTop: 64 },
          listView: { backgroundColor: "white" },
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 6,
          },
        }}
      />
    </SafeAreaView>
  );
};

export default SearchPlace;
