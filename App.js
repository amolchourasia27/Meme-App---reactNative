import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [memeImage, setMemeImage] = useState(
    'https://www.bygeorgejournal.ca/wp-content/uploads/2015/11/christmas_01a.jpg',
  );
  const [isLoading, setIsLoading] = useState(true);
  const getImage = async () => {
    const url = 'https://custom-meme-api.herokuapp.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    const memeData = data.picture;
    setMemeImage(memeData);
    setIsLoading(true);
  };
  const Meme = props => {
    return (
      <ScrollView style={[styles.imageBox, styles.elevation]}>
        <Image source={{uri: memeImage}} style={styles.meme} />
      </ScrollView>
    );
  };

  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.headingText}>Meme App</Text>
      <Meme data={memeImage} />
      <TouchableOpacity
        style={[styles.reloadButton, styles.elevation]}
        onPress={() => getImage()}>
        <Text style={styles.buttonText}>New Meme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#19b2ff',
    flexDirection: 'column',
  },
  headingText: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#ffd800',
    fontWeight: 'bold',
  },
  reloadButton: {
    alignSelf: 'center',
    backgroundColor: '#ff198c',
    marginBottom: 150,
    borderRadius: 10,
    height: 60,
    width: 170,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#00225C',
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
  },
  buttonText: {
    color: '#ffd800',
    alignSelf: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 18,
  },
  imageBox: {
    resizeMode: 'contain',
    alignContent: 'center',
    height: 'auto',
    width: 'auto',
    padding: '5%',
    margin: '10%',
    marginLeft: 40,
  },
  meme: {
    alignContent: 'center',
    height: 'auto',
    width: 'auto',
    resizeMode: 'contain',
    borderColor: 'white',
    aspectRatio: 0.6,
  },
});
