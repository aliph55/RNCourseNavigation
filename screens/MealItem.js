import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../components/MealDetails";

export default function MealItem({
  title,
  imageUrl = "",
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() =>
          navigation.navigate("MealsDetial", {
            mealId: id,
          })
        }
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: imageUrl }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
    // borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  detailsItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
