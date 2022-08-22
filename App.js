import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
            title: 'RandomMemes',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
        <Stack.Screen
          name="AllMemes"
          component={AllMemesScreens}
          options={{
            title: 'All Memes',
            headerStyle: {
              backgroundColor: '#005480',
            },
          }}
        />
        <Stack.Screen name="MemesByIndex" component={MemesByIndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
