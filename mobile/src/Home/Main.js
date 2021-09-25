import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ListCategory from './ListCategory';
import IntroCard from './IntroCard';
import CurrentGoals from '../CurrentGoals';

const Main = ({category, handleGoals, currentGoals}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.root}>
      <IntroCard handleGoals={handleGoals} />
      {currentGoals ? <CurrentGoals currentGoals={currentGoals} /> : null}
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
