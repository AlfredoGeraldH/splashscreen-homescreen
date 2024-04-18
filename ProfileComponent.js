import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import TopBarComponent from './TopBarComponent';

const ProfileComponent = ({name}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.avatar} source={require('./assets/Avatar.png')}/>
      <View>
        <Text style={styles.salam}>Selamat Datang</Text>
        <Text style={styles.nama}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    marginBottom:10,
  },
  salam: {
    fontWeight: '200',
    marginLeft: 15,
    
  },

  nama: {
    fontWeight: '500',
    marginLeft: 15,
  }
});

export default ProfileComponent
