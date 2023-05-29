import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "./MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId: catId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [navigation, catId]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem({ item }) {
    const { title, duration, complexity, affordability, imageUrl, id } = item;

    const mealsitemrops = {
      title: title,
      duration: duration,
      complexity: complexity,
      affordability: affordability,
      imageUrl: imageUrl,
      id: id,
    };

    return <MealItem {...mealsitemrops} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
