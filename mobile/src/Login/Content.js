import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import {materialTheme} from '../utils/config';
import Header from './Header';

const Content = ({
  signInLabel = 'Sign In',
  handleInput,
  handleSignin,
  auth,
}) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Header />
        <TextInput
          style={styles.customInput}
          onChangeText={event => handleInput(event, 'email')}
          value={auth.email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          secureTextEntry
          style={styles.customInput}
          onChangeText={event => handleInput(event, 'password')}
          value={auth.password}
          placeholder="Password"
          keyboardType="default"
        />
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
    position: 'absolute',
    display: 'flex',
    bottom: 50,
    top: 0,
    left: 0,
    right: 0,
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
    marginTop: 30,
  },
  customButtonLabel: {
    fontWeight: 'bold',
    color: 'white',
  },
  customInput: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    borderColor: 'gainsboro',
  },
  footerCustomLabel: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  footerLabel: {
    padding: 10,
    color: 'gray',
  },
});

export default Content;
