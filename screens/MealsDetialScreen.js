import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function MealsDetialScreen({ route, navigation }) {
  const { mealId } = route.params;

  function headerButtonPressedHandler(params) {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    let icon = "star";
    let color = "white";
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={({ pressed }) => {
              pressed && { opacity: 0.7 };
            }}
            onPress={headerButtonPressedHandler}
          >
            <Ionicons name={icon} color={color} size={24} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.rootContainer}
    >
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: selectedMeal.imageUrl }}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detaiText}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingBottom: 32,
    backgroundColor: "#24180F",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detaiText: {
    color: "white",
  },
  listContainer: {
    maxWidth: "80%",
    alignSelf: "center",
  },
});
