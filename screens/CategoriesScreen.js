import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    const { color, title, id } = item;
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: id,
      });
    }

    return (
      <CategoryGridTile
        onPress={pressHandler}
        color={color}
        title={title}
        id={id}
      />
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
