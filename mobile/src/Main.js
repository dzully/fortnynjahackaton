import React, {Fragment, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import {Store} from '../store';

const Stack = createNativeStackNavigator();

const Main = () => {
  const {state} = useContext(Store);
  const authentication = state.authentication;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        {!authentication ? (
          <Fragment>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Fragment>
        ) : (
          <Fragment>
            <Stack.Screen name="Home" component={Home} />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
