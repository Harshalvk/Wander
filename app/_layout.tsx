import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  useFonts({
    "geist-black": require("./../assets/fonts/Geist-Black.ttf"),
    "geist-bold": require("./../assets/fonts/Geist-Bold.ttf"),
    "geist-medium": require("./../assets/fonts/Geist-Medium.ttf"),
    "geist-regular": require("./../assets/fonts/Geist-Regular.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
