import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    id: 1,
    image: require("./assets/ic_transfer.png"),
    name: "Transfer",
  },
  {
    id: 2,
    image: require("./assets/ic_ewallet.png"),
    name: "E-Wallet",
  },
  {
    id: 3,
    image: require("./assets/ic_pembayaran.png"),
    name: "Pembayaran",
  },
  {
    id: 4,
    image: require("./assets/ic_pembelian.png"),
    name: "Pembelian",
  },
  {
    id: 5,
    image: require("./assets/ic_investasi.png"),
    name: "Investasi",
  },
  {
    id: 6,
    image: require("./assets/ic_lifestyles.png"),
    name: "Lifestyle",
  },
  {
    id: 7,
    image: require("./assets/ic_lifegoals.png"),
    name: "Life Goals",
  },
  {
    id: 8,
    image: require("./assets/ic_gaming.png"),
    name: "Gaming",
  },
];

const MenuComponent = () => {
  const sampleCallback = (isi) => {
    console.log("nilai callback", isi);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => sampleCallback(item.name)}>
        <View style={[styles.item]}>
          <Image style={styles.icon} source={item.image} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        style={{height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingBottom: 15,
  },
  contentContainer: {
    paddingHorizontal: 15,
  },

  item: {
    marginRight: 5,
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 16,
    borderColor: "rgba(58, 53, 65, 0.23)",
    lineHeight: 15.4,
    color: "rgba(58, 53, 65, 0.68)",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#FEE1CE",
    color: "#FF6600",
    borderColor: "#FEE1CE",
  },

  icon: {
    width: 60,
    height: 60,
  },
  text: {
    fontSize: 11,
    fontWeight: "400",
  },
});

export default MenuComponent;
