import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const AllMemes = () => {
  const [Data2, setData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const allMemesFun = async () => {
    setisLoading(true);
    const url = 'https://custom-meme-api.herokuapp.com/allposts';
    const res = await fetch(url);
    const DATA = await res.json();
    const Data2 = DATA;
    setData(Data2);
    setisLoading(false);
  };
  const Item = props => (
    <ScrollView style={styles.BodWrapper}>
      <View style={styles.contentBox}>
        <View style={styles.textBox}>
          <Text style={styles.indexText}>
            Meme no :<Text>{props.data.index}</Text>
          </Text>
          <Text style={styles.ratingText}>
            {props.data.ratings}
            <Text>🌟</Text>
          </Text>
        </View>
        <View>
          <Image style={styles.image} source={{uri: props.data.picture}} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.indexText}>
            By-
            <Text>Amol</Text>
          </Text>
          {/* <Text style={styles.ratingText}>
            {props.data.ratings}
            <Text>Ratings</Text>
          </Text> */}
        </View>
      </View>
    </ScrollView>
  );
  const RenderItem = ({item}) => <Item data={item} />;
  return (
    <View style={styles.mainBody}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={styles.indicator}
        />
      ) : null}
      <FlatList
        data={Data2}
        renderItem={item => RenderItem(item)}
        keyExtractor={item => item._id}
        horizontal={false}
        initialNumToRender={5}
      />
      {/* <Button
        onPress={allMemesFun}
        title="Show all Memes"
        color="#0087cc"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      <TouchableOpacity
        style={[styles.button, styles.elevation]}
        onPress={allMemesFun}>
        <Text style={styles.buttonText}> Show all Memes</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#005480',
    zIndex: 1,
  },
  BodWrapper: {
    backgroundColor: '#005480',
    overflow: 'scroll',
    borderWidth: 2,
    borderLeftColor: '#005480',
    borderLeftWidth: 10,
    borderRightColor: '#005480',
    borderRightWidth: 10,
    height: 'auto',
    width: 'auto',
  },
  indicator: {
    justifyContent: 'center',
    zIndex: 1,
    flex: 6,
  },
  contentBox: {
    backgroundColor: '#005480',
    flexDirection: 'column-reverse',
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indexText: {
    color: 'black',
    alignSelf: 'flex-start',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ratingText: {
    color: 'black',
    alignSelf: 'flex-end',
    fontSize: 13,
    fontWeight: 'bold',
    padding: 5,
  },
  image: {
    padding: '40%',
    resizeMode: 'contain',
  },
  button: {
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: '#0087cc',
    borderRadius: 10,
    borderWidth: 3,
    height: 60,
    width: 170,
    marginBottom: '15%',
    marginTop: '8%',
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
    color: 'black',
    alignSelf: 'center',
    marginTop: 18,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default AllMemes;
