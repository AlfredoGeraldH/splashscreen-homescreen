import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import TopBarComponent from "./TopBarComponent";
import ProfileComponent from "./ProfileComponent";
import CardComponent from "./CardComponent";
import CategoryComponent from "./CategoryComponent";
import MenuComponent from "./MenuComponent";
import PromoComponent from "./PromoComponent";
import simulateGetAccount from "./simulateGetAccount";
import { auth, signOut } from "./firebaseConfig";

const HomeScreen = () => {
  const [account, setAccount] = useState();

  const handleAsync = async () => {
    try {
      const asyncResult = await simulateGetAccount();
      console.log("Berhasil", asyncResult);
      setAccount(asyncResult);
    } catch (execption) {
      console.error("catch:", execption);
    } finally {
      console.log("okeee");
    }
  };

  useEffect(() => {
    handleAsync();
  }, []);

  const signOutUser = () => {
    console.log("SignOut Called");
    signOut(auth)
      .then(() => {
        console.log("SignOut Successful");
        //SignOut Successful
        setIsLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TopBarComponent />
        <ProfileComponent name={account && account.name} />
        <CardComponent
          balance={account && account.balance}
          no_rek={account && account.no_rek}
          poin={account && account.poin}
        />
      </View>
      <View>
        <CategoryComponent />
        <MenuComponent />
      </View>
      <View>
        <PromoComponent />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="sign Out" onPress={() => signOutUser()} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEE1CE",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#FEE1CE",
    width: "100%",
    height: 298,
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default HomeScreen;
