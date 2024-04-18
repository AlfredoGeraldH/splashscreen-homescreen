import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "./firebaseConfig";
import HomeScreen from "./HomeScreen";

const data = [
  {
    id: 1,
    image: require("./assets/ic_wallet.png"),
    name: "E-Wallet",
  },
  {
    id: 2,
    image: require("./assets/ic_qris.png"),
    name: "Qris",
  },
  {
    id: 3,
    image: require("./assets/ic_more.png"),
    name: "Lainnya",
  },
];

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // const auth = getAuth();
    // console.log(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(`User Logged In ${uid}`);
        setIsLogin(true);
        // ...
      } else {
        // User is signed out
        // ...
        console.log(`User Not Logged In`);
        setIsLogin(false);
      }
    });
  });

  const SignInScreen = () => {
    const signIn = () => {
      signInWithEmailAndPassword(
        auth,
        "alfredogeraldhartono@gmail.com",
        "12345678"
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setIsLogin(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    };
    const sampleCallback = (isi) => {
      console.log("nilai callback", isi);
    };

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity onPress={() => sampleCallback(item.name)}>
          <View style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                paddingVertical: 4,
                paddingHorizontal: 15,
                margin: 10,
              }}
              source={item.image}
            />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Image source={require("./assets/logo.png")} />
          <Text style={{ color: "#006599", fontWeight: "600" }}>
            Melayani Negeri Kebanggan Bangsa
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            signIn();
          }}
        >
          <View
            style={{
              backgroundColor: "#FF6600",
              flexDirection: "row",
              height: 50,
              width: 295,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              margin: 50,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>Login</Text>
            <Image source={require("./assets/ic_face.png")} />
          </View>
        </TouchableOpacity>
        <View style={{ height: 150 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        <Image
          style={{ marginTop: 100, marginBottom: 20 }}
          source={require("./assets/help.png")}
        />
        <Text style={{ margin: 20 }}>v5.11.1</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {isLogin ? <HomeScreen /> : <SignInScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "105%",
    width: "100%",
    backgroundColor: "#F4FCFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
