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
  const [memeRating, setMemeRating] = useState(1);
  const [memeIndex, setMemeIndex] = useState('0');
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(memeIndex);

  const getImage = async () => {
    const url = 'https://custom-meme-api.herokuapp.com/posts';
    const res = await fetch(url);
    const data = await res.json();
    const memeData = data.picture;
    setMemeImage(memeData);
    setIsLoading(true);
    const memeIndexData = data.index;
    const memeRatingData = data.ratings;
    setMemeIndex(memeIndexData);
    setMemeRating(memeRatingData);
  };

  const getImageByIndex = async () => {
    const memeNum = count;
    const url = 'https://custom-meme-api.herokuapp.com/' + memeNum;
    const res = await fetch(url);
    const data = await res.json();
    const memeData = data.picture;
    setMemeImage(memeData);
    setIsLoading(true);
    const memeIndexData = data.index;
    const memeRatingData = data.ratings;
    setMemeIndex(memeIndexData);
    setMemeRating(memeRatingData);
  };

  function Meme(props) {
    return (
      <ScrollView style={[styles.imageBox]}>
        <Text style={styles.numText}>
          Meme Number <Text>{memeIndex}</Text>
        </Text>
        <Text style={styles.scrollText}>Scroll Down for more</Text>
        <Image source={{uri: memeImage}} style={styles.meme} />
      </ScrollView>
    );
  }

  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.headingText}>Meme App</Text>
      <Meme data={memeImage} />
      <Text style={styles.ratingsText}>
        <Text>Ratings</Text> {memeRating}
        <Text style={styles.rate}>/5</Text>
      </Text>
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
    color: '#ffd819',
    fontWeight: 'bold',
  },
  numText: {
    color: '#07354c',
    fontSize: 25,
  },
  scrollText: {
    color: '#07354c',
    fontSize: 10,
  },
  ratingsText: {
    alignSelf: 'center',
    color: '#ffd819',
    fontSize: 30,
    paddingBottom: 100,
  },
  rate: {
    color: '#ff198c',
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
    shadowColor: 'blue',
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
    overflow: 'scroll',
    borderColor: '#07354c',
    borderBottomWidth: 2,
    borderRadius: 10,
    height: 'auto',
    width: 'auto',
    padding: '0.5%',
    paddingBottom: 280,
    margin: '10%',
    marginLeft: 40,
  },
  meme: {
    alignContent: 'center',
    height: 'auto',
    width: 'auto',
    resizeMode: 'contain',
    aspectRatio: 0.6,
  },
});
