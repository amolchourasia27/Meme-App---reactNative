/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View style={styles.bodyWrapper}>
      <View style={styles.ImageBox}>
        <Text style={styles.ImageBoxText}>Procrastinator</Text>
        <Text style={styles.ImageBoxText2}>Memes</Text>
      </View>

      <View style={styles.ButtonBox}>
        <TouchableOpacity
          style={styles.NavButtons}
          onPress={() => navigation.navigate('Random')}>
          <Text style={styles.ButtonText}>Random Memes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.NavButtons}
          onPress={() => navigation.navigate('AllMemes')}>
          <Text style={styles.ButtonText}>All memes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.NavButtons}
          onPress={() => navigation.navigate('MemesByIndex')}>
          <Text style={styles.ButtonText}>Get Memes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  bodyWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#005480',
  },
  ImageBox: {
    height: 220,
    width: 220,
    backgroundColor: '#0087cc',
    borderRadius: 100,
    alignSelf: 'center',
    borderWidth: 5,
  },
  ImageBoxText: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    paddingTop: '35%',
    fontSize: 25,
  },
  ImageBoxText2: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: '10%',
    paddingTop: 2,
    fontSize: 25,
  },
  ButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingVertical: '50%',
    backgroundColor: '#005480',
  },
  NavButtons: {
    backgroundColor: '#0087cc',
    // paddingVertical: 30,
    height: 60,
    width: '25%',
    borderRadius: 10,
  },
  ButtonText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
});
