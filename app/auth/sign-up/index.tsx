import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { SignupSchema } from "~/schemas/auth.schema";

const SignUpPage = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignupSchema>>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignupSchema>) => {
    try {
      const res = await fetch(
        `${process.env.EXPO_PUBLIC_BASE_URL}/api/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!res.ok) {
        alert("User not created");
        return;
      }

      router.push("/auth/sign-in");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

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
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="username"
            />
            {errors.username && <Text>This is required.</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <Text>This is required.</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  textContentType="password"
                />
              )}
              name="password"
            />
            {errors.password && <Text>This is required</Text>}
            <Button
              className="bg-blue-600 rounded-xl"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="text-[#ffff] font-semibold">Continue</Text>
            </Button>
          </View>
          <Text className="mt-5">
            Don't have an account?{" "}
            <Text
              onPress={() => router.push("/auth/sign-in")}
              className="text-blue-600"
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPage;
