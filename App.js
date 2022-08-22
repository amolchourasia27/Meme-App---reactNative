/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';

import HomeScreen from './screens/Home';
import RandomScreen from './screens/Random';
import AllMemesScreens from './screens/AllMemes';
import MemesByIndexScreen from './screens/MemesByIndex';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <Image
                style={{width: 40, height: 40}}
                source={require('./assets/logo.png')}
              />
            ),
            title: 'Welcome',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
        <Stack.Screen
          name="Random"
          component={RandomScreen}
          options={{
            headerRight: () => (
              <Image
                style={{width: 40, height: 40}}
                source={require('./assets/logo.png')}
              />
            ),
            title: 'Random Memes',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
        <Stack.Screen
          name="AllMemes"
          component={AllMemesScreens}
          options={{
            headerRight: () => (
              <Image
                style={{width: 40, height: 40}}
                source={require('./assets/logo.png')}
              />
            ),
            title: 'All Memes',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
        <Stack.Screen
          name="MemesByIndex"
          component={MemesByIndexScreen}
          options={{
            headerRight: () => (
              <Image
                style={{width: 40, height: 40}}
                source={require('./assets/logo.png')}
              />
            ),
            title: 'Get a Meme',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
