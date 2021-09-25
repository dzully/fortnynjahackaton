import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {materialTheme} from '../utils/config';
import GoalIcon from '../assets/goal.png';

const IntroCard = ({
  cardTitle = 'Create Your Saving Goals',
  cardSubitle = `We'll guid you along the way to make it easier!`,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.cardContainer}>
        <View style={styles.customCard}>
          <Image source={GoalIcon} style={styles.customImage} />
          <View style={styles.customLabelContainer}>
            <Text style={styles.cardLabelTitle}>{cardTitle}</Text>
            <Text style={styles.cardLabel}>{cardSubitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    padding: 10,
  },
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  customCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: materialTheme.primary,
    marginTop: 10,
    width: '100%',
    minHeight: 100,
    padding: 10,
  },
  customImage: {
    width: 70,
    height: 70,
  },
  customLabelContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    bottom: 2,
    marginLeft: 10,
  },
  cardLabelTitle: {
    marginTop: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: 'white',
  },
});

export default IntroCard;
