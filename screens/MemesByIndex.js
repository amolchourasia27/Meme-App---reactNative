import React, {useState} from 'react';
import {View, Image, Button, TextInput, StyleSheet} from 'react-native';

const MemesByIndex = () => {
  const [index, setIndex] = useState('0');
  const [meme, setMeme] = useState();
  const [text, onChangeText] = useState('null');
  const [number, onChangeNumber] = useState(null);
  const getImageByIndex = async () => {
    const urlNum = number;
    if (urlNum < 300 && urlNum >= 0) {
      const url = 'https://custom-meme-api.herokuapp.com/' + urlNum;
      const res = await fetch(url);
      const data = await res.json();
      const memeData = data.picture;
      setMeme(memeData);
    }
  };

  return (
    <View style={styles.mainBox}>
      <View style={styles.bodyWrapper}>
        <View style={styles.inputBoxWrapper}>
          <TextInput
            style={styles.inputBox}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="number-pad"
            placeholder="Enter a number below 300"
          />
        </View>
        <View style={styles.imageBox}>
          <Image source={{uri: meme}} style={styles.image} />
        </View>
        <Button
          onPress={getImageByIndex}
          title="Show a Memes"
          color="#0087cc"
          accessibilityLabel="get meme from input value"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '100%',
  },
  bodyWrapper: {
    backgroundColor: '#005480',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputBoxWrapper: {
    padding: '1%',
  },
  inputBox: {
    backgroundColor: '#0087cc',
    borderRadius: 10,
    borderWidth: 5,
    textAlign: 'center',
    width: '50%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    padding: '50%',
    resizeMode: 'contain',
  },
  imageBox: {
    borderWidth: 10,
  },
});

export default MemesByIndex;
