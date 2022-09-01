import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Animated} from 'react-native';

const Home = ({navigation}) => {
  const [done, setIsDone] = useState(false);
  useEffect(() => {
    fadeIn();
  }, [done]);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const Ring = ({delay}) => {
    return <Animated.View style={[styles.ring, {opacity: fadeAnim}]} />;
  };
  const handelAnimation = () => {
    fadeOut();
    setIsDone(false);
  };
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
    setIsDone(true);
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
      <TouchableOpacity style={styles.ImageBox} onPress={handelAnimation}>
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
    backgroundColor: 'black',
  },
  ImageBox: {
    height: 220,
    width: 220,
    backgroundColor: 'black',
    borderRadius: 220 / 2,
    alignSelf: 'center',
  },
  ring: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 220 / 2,
    alignSelf: 'center',
    borderColor: '#0087cc',
    borderWidth: 5,
  },
  ImageBoxText: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomColor: '#0087cc',
    borderBottomWidth: 2,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: '10%',
    paddingVertical: '5%',
    paddingTop: '35%',
    fontSize: 25,
  },
  ImageBoxText2: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
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
    backgroundColor: 'black',
  },
  NavButtons: {
    backgroundColor: 'black',
    // paddingVertical: 30,
    borderColor: '#0087cc',
    height: 60,
    width: '30%',
    borderRadius: 10,
    borderWidth: 3,
  },
  ButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
});
