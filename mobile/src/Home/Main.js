import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ListCategory from './ListCategory';
import IntroCard from './IntroCard';

const Main = ({category}) => {
  return (
    <ScrollView style={styles.root}>
      <IntroCard />
      <ListCategory category={category} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    bottom: 70,
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Main;
