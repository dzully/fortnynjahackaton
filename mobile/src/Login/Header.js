import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import WelcomeIcon from '../assets/WelcomeIcon.png';

const Header = ({label = 'Welcome'}) => {
  return (
    <View style={styles.root}>
      <Image source={WelcomeIcon} style={styles.imageContainerSrc} />
      <Text style={styles.imageContainerLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: '100%',
  },
  imageContainerSrc: {
    width: 50,
    height: 50,
  },
  imageContainerLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Header;
