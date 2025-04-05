import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useRouter } from "expo-router";

const SignInPage = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 25,
        }}
      >
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onPress={() => router.back()}
            variant={"secondary"}
            className="rounded-full"
            size={"icon"}
          >
            <Ionicons name="chevron-back" size={18} />
          </Button>
        </View>

        <View className="flex items-center justify-center mt-20">
          <View className="flex items-center justify-center">
            <Text className="text-3xl font-semibold">Sign in now</Text>
            <Text className="text-muted-foreground">
              Please sign in to continue our app
            </Text>
          </View>
          <View className="w-full flex gap-6 justify-between mt-10">
            <Input placeholder="Enter email" />
            <Input placeholder="Enter password" secureTextEntry={true} />
            <Button className="bg-blue-600 rounded-xl h-96">
              <Text className="text-[#ffff] font-semibold">Continue</Text>
            </Button>
          </View>
          <Text className="mt-5">
            Don't have an account?{" "}
            <Text
              onPress={() => router.replace("/auth/sign-up")}
              className="text-blue-600"
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInPage;
