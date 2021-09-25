import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Content from './Content';
import Footer from './Footer';
import {MainCallback, Store} from '../../store';
import {endpoint} from '../utils/endpoint';

const Login = ({navigation}) => {
  const {dispatch} = useContext(Store);
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });

  const handleSignin = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: auth.email,
        password: auth.password,
      }),
    };

    fetch(endpoint.signin, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch({type: MainCallback.USER_DATA, value: result});
      })
      .catch(error => console.log('error', error));
  };

  const handleInput = (event, param) => {
    setAuth({...auth, [param]: event});
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.root}>
      <Content
        handleInput={handleInput}
        handleSignin={handleSignin}
        auth={auth}
      />
      <Footer handleSignup={handleSignup} />
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

export default Login;
