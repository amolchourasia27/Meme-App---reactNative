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
  const [memeIndex, setMemeIndex] = useState();
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

  const prevImageByIndex = async () => {
    const memeNum = memeIndex - 1;
    if (memeNum > 0) {
      setCount(memeNum);
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
    } else {
      getImage();
    }
  };
  const nextImageByIndex = async () => {
    const memeNum = memeIndex + 1;
    if (memeNum < 300) {
      setCount(memeNum);
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
    } else {
      getImage();
    }
  };

  const Meme = props => {
    return (
      <ScrollView style={[styles.imageBox]}>
        <Text style={styles.numText}>
          Meme Number <Text>{memeIndex}</Text>
        </Text>
        <Text style={styles.scrollText}>Scroll Down for more</Text>
        <Image source={{uri: memeImage}} style={styles.meme} />
      </ScrollView>
    );
  };

  const Buttons = props => {
    return (
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={[styles.countPButton, styles.elevation]}
          onPress={() => prevImageByIndex()}>
          <Text style={styles.IButtonText}>Previous</Text>
          <Text style={styles.IButtonText}>{count - 1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.randomButton, styles.elevation]}
          onPress={() => getImage()}>
          <Text style={styles.buttonText}>New Meme</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.countNButton, styles.elevation]}
          onPress={() => nextImageByIndex()}>
          <Text style={styles.IButtonText}>Next</Text>
          <Text style={styles.IButtonText}>{count + 1}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.bodyWrapper}>
      <Text style={styles.headingText}>Meme App</Text>
      <Meme data={memeImage} />
      <Text style={styles.ratingsText}>
        <Text>Ratings</Text> {memeRating}
        <Text style={styles.rate}>/5</Text>
      </Text>
      <Buttons data={memeIndex} />
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
    flex: 2,
  },
  scrollText: {
    color: '#07354c',
    fontSize: 10,
    flex: 2,
  },
  ratingsText: {
    alignSelf: 'center',
    color: '#ffd819',
    fontSize: 30,
    paddingBottom: 90,
    marginBottom: 0.6,
  },
  rate: {
    color: '#ff198c',
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 40,
    width: '100%',
    alignContent: 'center',
  },
  randomButton: {
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: '#ff198c',
    borderRadius: 10,
    height: 60,
    width: 170,
  },
  countNButton: {
    height: 50,
    width: 50,
    borderRadius: 10,
    alignContent: 'center',
    borderTopWidth: 10,
    borderColor: '#19b2ff',
    marginBottom: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#ff198c',
  },
  countPButton: {
    height: 50,
    width: 50,
    borderTopWidth: 10,
    borderColor: '#19b2ff',
    borderRadius: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#ff198c',
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: '#ffd800',
    alignSelf: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 18,
  },
  IButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#ffd800',
    padding: '1%',
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
