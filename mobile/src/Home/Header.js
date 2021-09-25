import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {materialTheme} from '../utils/config';

const Header = ({authentication}) => {
  return (
    <View style={styles.root}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTitle}>{authentication.name?.charAt(0)}</Text>
      </View>
      <Text style={styles.headerTitle}>{authentication.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: materialTheme.dark,
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  avatar: {
    marginRight: 15,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'gainsboro',
  },
  avatarTitle: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  headerTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default Header;
