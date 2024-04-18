import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const TopBarComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo_bni}
          source={require("./assets/logo_bni_small.png")}
        />
        <View style={styles.header}>
          <Image
            style={styles.notif}
            source={require("./assets/ic_notification.png")}
          />
          <View style={styles.button}>
            <Image
              style={styles.help}
              source={require("./assets/ic_help.png")}
            />
            <Text>Help</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEE1CE",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  logo_bni: {
    width: 62,
    height: 20,
  },

  notif: {
    width: 24,
    height: 24,
  },

  help: {
    width: 18,
    height: 18,
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

export default TopBarComponent;
