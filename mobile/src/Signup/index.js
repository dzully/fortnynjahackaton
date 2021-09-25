import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Content from './Content';
import Footer from '../Login/Footer';

const Signup = ({navigation}) => {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
    username: '',
    phoneNo: '',
    identification: '',
  });
  const handleSignin = () => {};

  const handleInput = (event, param) => {
    setAuth({...auth, [param]: event});
  };

  const handleSignup = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.root}>
      <Content
        handleInput={handleInput}
        handleSignin={handleSignin}
        auth={auth}
      />
      <Footer
        forgetPasswordLabel="Already have an account ?"
        actionLabel="Sign in"
        handleSignup={handleSignup}
      />
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
  footerRoot: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    height: 50,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
});

export default Signup;
