import {useState} from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const CardComponent = ({ balance, no_rek, poin }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.flex]}>
        <Text style={styles.Text}>Taplus Pegawai BNI</Text>
        <Image source={require("./assets/ic_arrow_down.png")} />
      </View>
      <View style={styles.row}>
        <Text style={styles.rupiah}>
          {" "}
          {isShow ? "RP" + balance : "RP  **** **** ****"}{" "}
        </Text>
        <TouchableOpacity onPress={() => setIsShow(!isShow)}>
          <Image
            style={styles.mata}
            source={require("./assets/ic_visibility.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, styles.flex]}>
        <View style={[styles.row]}>
          <Text style={styles.Text}>{no_rek}</Text>
          <Image source={require("./assets/ic_copy.png")} />
        </View>
        <View style={[styles.row, styles.button]}>
            <Image source={require("./assets/ic_poin.png")} />
            <Text style={[styles.Text, styles.red]}>{poin}</Text>
            <Image source={require("./assets/ic_arrow_right.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF9752",
    borderRadius: 20,
    width: 355,
    height: 125,
    padding: 15,
    margin: 5,
  },

  rupiah: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    marginBottom: 15,
    marginTop: 15,
  },

  red: {
    color: '#F60',
  },

  Text: {
    fontWeight: "300",
    color: "white",
  },

  row: {
    flexDirection: "row",
  },

  flex: {
    justifyContent: "space-between",
  },

  mata: {
    marginTop: 15,
  },

  button: {
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "white",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    alignItems: "center",
  },
});

export default CardComponent;
