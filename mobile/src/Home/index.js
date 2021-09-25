import React, {useContext, useEffect} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainCallback, Store} from '../../store';
import {materialTheme} from '../utils/config';
import {endpoint} from '../utils/endpoint';
import Header from './Header';
import Main from './Main';
import FooterNavigation from './FooterNavigation';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  const {state, dispatch} = useContext(Store);
  const authentication = state.authentication;
  const category = state.category;
  const duration = state.duration;

  useEffect(() => {
    if (!category) {
      fetch(endpoint.category)
        .then(response => response.json())
        .then(result => {
          dispatch({type: MainCallback.HANDLE_CATEGORY, value: result});
        })
        .catch(error => console.log('error', error));
    }

    if (!duration) {
      fetch(endpoint.duration)
        .then(response => response.json())
        .then(result => {
          dispatch({type: MainCallback.HANDLE_DURATION, value: result});
        })
        .catch(error => console.log('error', error));
    }
  }, [category, dispatch, duration]);

  const handleGoals = () => {
    navigation.navigate('CreateGoals');
  };

  return (
    <View style={styles.root}>
      <StatusBar animated={true} backgroundColor={materialTheme.dark} />
      <Header authentication={authentication} />
      <Tab.Navigator
        tabBar={props => <FooterNavigation {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="homeMain"
          component={() => (
            <Main category={category} handleGoals={handleGoals} />
          )}
        />
        <Tab.Screen
          name="homeProfile"
          component={() => <Profile authentication={authentication} />}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  container: {
    position: 'absolute',
    display: 'flex',
    bottom: 80,
    top: 80,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
});

export default Home;
