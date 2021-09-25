import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Store} from '../../store';

const Home = ({navigation}) => {
  const {state} = useContext(Store);
  const authentication = state.authentication;
  console.log({authentication});

  return (
    <View style={styles.root}>
      <Text>Home</Text>
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
