import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SelectBudgeOptionT, SelectTravlersT } from "~/lib/constants";
import { cn } from "~/lib/utils";

export default function OptionCard({
  item,
  selectedOption,
}: {
  item: SelectTravlersT | SelectBudgeOptionT;
  selectedOption: SelectTravlersT | SelectBudgeOptionT;
}) {
  return (
    <View
      className={cn(
        "flex flex-row items-center justify-between p-3 mt-3 bg-gray-100 rounded-xl",
        selectedOption.id === item.id && "border"
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
