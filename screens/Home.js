import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Animated} from 'react-native';

const Home = ({navigation}) => {
  useEffect(() => {
    fadeIn();
  }, []);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const Ring = ({delay}) => {
    return <Animated.View style={[styles.ring, {opacity: fadeAnim}]} />;
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 2500,
    }).start();
  };
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  };
  return (
    <View style={styles.bodyWrapper}>
      <TouchableOpacity style={styles.ImageBox} onPress={fadeOut}>
        <Text style={styles.ImageBoxText}>Procrastinator</Text>
        <TouchableOpacity>
          <Text style={styles.ImageBoxText2}>Memes</Text>
        </TouchableOpacity>
        <Ring />
      </TouchableOpacity>

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
    borderRadius: 220 / 2,
    alignSelf: 'center',
  },
  ring: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 220 / 2,
    alignSelf: 'center',
    borderColor: '#001b28',
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
    width: '30%',
    borderRadius: 10,
    borderWidth: 3,
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
