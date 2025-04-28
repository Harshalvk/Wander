import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SelectTravlersT } from "~/lib/constants";
import { cn } from "~/lib/utils";

export default function OptionCard({
  item,
  selectedTraveler,
}: {
  item: SelectTravlersT;
  selectedTraveler: SelectTravlersT;
}) {
  return (
    <View
      className={cn(
        "flex flex-row items-center justify-between p-3 mt-3 bg-gray-100 rounded-xl",
        selectedTraveler.id === item.id && "border"
      )}
    >
      <View>
        <Text className="text-2xl font-bold">{item.title}</Text>
        <Text className="text-sm text-muted-foreground">{item.desc}</Text>
      </View>
      <View>
        <Text className="text-4xl">{item.icon}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
