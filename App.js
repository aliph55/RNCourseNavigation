import { StyleSheet, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetialScreen from "./screens/MealsDetialScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="MealsCategories"
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealsDetial" component={MealsDetialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#24180f",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
