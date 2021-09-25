import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {materialTheme} from '../utils/config';
import WelcomeIcon from '../assets/WelcomeIcon.png';

const Login = ({signInLabel = 'Sign In'}) => {
  const handleSignin = () => {};

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={WelcomeIcon} style={{width: 50, height: 50}} />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSignin}
          style={styles.customButton}>
          <Text style={styles.customButtonLabel}>{signInLabel}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
  },
  container: {
    position: 'relative',
    display: 'flex',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: materialTheme.primary,
    padding: 15,
    width: '100%',
    borderRadius: 5,
  },
  customButtonLabel: {
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: '100%',
  },
});

export default Login;
