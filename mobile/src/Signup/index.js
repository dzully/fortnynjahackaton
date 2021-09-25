import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Content from './Content';
import Footer from '../Login/Footer';
import {endpoint} from '../utils/endpoint';
import CustomAlert from './CustomAlert';
import {MainCallback, Store} from '../../store';

const Signup = ({navigation}) => {
  const {dispatch} = useContext(Store);
  const [error, setError] = useState({status: false, message: ''});
  const [auth, setAuth] = useState({
    email: '',
    password: '',
    username: '',
    phoneNo: '',
    identification: '',
  });

  useEffect(() => {
    if (error.status) {
      setTimeout(() => {
        setError({status: false, message: ''});
      }, 4000);
    }
  }, [error]);

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
        name: auth.username,
        phoneno: auth.phoneNo,
        ic: auth.identification,
      }),
    };

    fetch(endpoint.signup, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.errors) {
          setError({status: true, message: result.errors});
        }
        if (result.userid) {
          dispatch({
            type: MainCallback.HANDLE_SIGN_UP_USER_ID,
            value: result.userid,
          });
          navigation.navigate('SMSVerify');
        }
      })
      .catch(error => console.log('error', error));
  };

  const handleInput = (event, param) => {
    setAuth({...auth, [param]: event});
  };

  const handleSignup = () => {
    navigation.navigate('Login');
  };

  const handleClose = () => {
    setError({status: false, message: ''});
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
      {error.status ? (
        <CustomAlert title={error.message} handleClose={handleClose} />
      ) : null}
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
