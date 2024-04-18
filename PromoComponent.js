import {useState} from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const PromoComponent =() => {
    return (
        <View style={styles.container}>
            <Text style={styles.promo}>Promo & Informasi</Text>
            <Image style={styles.center} source={require('./assets/promo.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        backgroundColor:'#ffff',
        width: 410,
        height: 210,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },

    promo:{
        marginBottom: 10,
        fontSize: 14,
    },
});

export default PromoComponent;