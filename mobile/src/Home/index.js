import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {MainCallback, Store} from '../../store';
import {materialTheme} from '../utils/config';
import {endpoint} from '../utils/endpoint';
import Header from './Header';
import ListCategory from './ListCategory';

const Home = ({navigation}) => {
  const {state, dispatch} = useContext(Store);
  const authentication = state.authentication;
  const category = state.category;
  console.log({category});

  useEffect(() => {
    if (!category) {
      fetch(endpoint.category)
        .then(response => response.json())
        .then(result => {
          dispatch({type: MainCallback.HANDLE_CATEGORY, value: result});
        })
        .catch(error => console.log('error', error));
    }
  }, [category, dispatch]);

  return (
    <View style={styles.root}>
      <StatusBar animated={true} backgroundColor={materialTheme.primary} />
      <Header authentication={authentication} />
      <ListCategory category={category} />
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
});

export default Home;
