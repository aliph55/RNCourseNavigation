import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItems, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItems, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailsItems, textStyle]}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
