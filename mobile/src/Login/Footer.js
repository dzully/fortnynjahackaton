import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {materialTheme} from '../utils/config';

const Footer = ({
  forgetPasswordLabel = `Don't have an account ?`,
  actionLabel = 'Sign up',
  handleSignup,
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.customButtonLabel}>{forgetPasswordLabel}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSignup}
        style={styles.customButton}>
        <Text style={styles.customButtonLabelAction}>{actionLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: 50,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  customButton: {
    position: 'relative',
    display: 'flex',
    padding: 10,
  },
  customButtonLabel: {
    color: materialTheme.primary,
  },
  customButtonLabelAction: {
    color: 'black',
  },
});

export default Footer;
