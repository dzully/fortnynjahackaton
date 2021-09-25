import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import HomeIcon from '../assets/home.png';
import UserIcon from '../assets/user.png';
import {materialTheme} from '../utils/config';

const FooterNavigation = ({state, descriptors, navigation}) => {
  const handlePress = param => {
    navigation.navigate(param);
  };

  let renderBgMain = 'white';
  let renderBgProfile = 'white';
  if (state.index === 0) {
    renderBgMain = materialTheme.light;
  }
  if (state.index === 1) {
    renderBgProfile = materialTheme.light;
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => handlePress('homeMain')}
        style={styles.customIconContainer}>
        <View style={[styles.iconContainer, {borderBottomColor: renderBgMain}]}>
          <Image source={HomeIcon} style={styles.customIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('homeProfile')}
        style={styles.customIconContainer}>
        <View
          style={[styles.iconContainer, {borderBottomColor: renderBgProfile}]}>
          <Image source={UserIcon} style={styles.customIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    zIndex: 100,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: 50,
    left: 0,
    right: 0,
  },
  customIconContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  iconContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 7,
    borderRadius: 10,
    borderBottomWidth: 4,
  },
  customIcon: {
    width: 25,
    height: 25,
  },
});

export default FooterNavigation;
