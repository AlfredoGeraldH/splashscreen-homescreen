import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const data = [
  {
    id: 1,
    name: "Favorit",
  },
  {
    id: 2,
    name: "Transfer",
  },
  {
    id: 3,
    name: "E-Wallet",
  },
  {
    id: 4,
    name: "Pembayaran",
  },
  {
    id: 5,
    name: "Pembelian",
  },
];

const CategoryComponent = () => {
  const [activeItem, setActiveItem] = useState(1);

  const renderItem = ({ item }) => {
    const isActive = item.id === activeItem;
    return (
      <Text
        style={[styles.item, isActive && styles.active]}
        onPress={() => setActiveItem(item.id)}
      >
        {item.name}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
        horizontal={true}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "rgba(58, 53, 65, 0.23)",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15.4,
    color: "rgba(58, 53, 65, 0.68)",
  },
  active: {
    backgroundColor: "#FEE1CE",
    color: "#FF6600",
    borderColor: "#FEE1CE",
  },
});

export default CategoryComponent;
