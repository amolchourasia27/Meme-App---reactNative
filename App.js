/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Text} from 'react-native';

import HomeScreen from './screens/Home';
import RandomScreen from './screens/Random';
import AllMemesScreens from './screens/AllMemes';
import MemesByIndexScreen from './screens/MemesByIndex';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: false,
        }}>
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
            headerLeft: () => (
              <Text style={{fontSize: 24, color: 'white'}}>Welcome</Text>
            ),
            headerShadowVisible: 'false',
            headerStyle: {
              backgroundColor: 'black',
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
            headerLeft: () => (
              <Text style={{fontSize: 24, color: 'white'}}>Random Memes</Text>
            ),
            headerShadowVisible: 'false',
            headerStyle: {
              backgroundColor: 'black',
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
            headerLeft: () => (
              <Text style={{fontSize: 24, color: 'white'}}>All Memes</Text>
            ),
            headerShadowVisible: 'false',
            headerStyle: {
              backgroundColor: 'black',
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
            headerLeft: () => (
              <Text style={{fontSize: 24, color: 'white'}}>Get a Meme</Text>
            ),
            headerShadowVisible: 'false',
            headerStyle: {
              backgroundColor: 'black',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
