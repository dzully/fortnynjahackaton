import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Store} from '../../store';
import {materialTheme} from '../utils/config';
import {endpoint} from '../utils/endpoint';

const SMSVerify = ({
  navigation,
  label = 'SMS Verify',
  buttonTitle = 'Submit',
}) => {
  const {state} = useContext(Store);
  const signUpUserId = state?.signUpUserId;

  const [token, setToken] = useState('214413');

  const handleInput = event => {
    if (event.length < 7) {
      setToken(event);
    }
  };

  const handleSubmit = () => {
    const modelToken = token.substring(0, 3);
    const modelTokenLast = token.substring(3, 6);
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: signUpUserId,
        code: `${modelToken}-${modelTokenLast}`,
      }),
    };

    fetch(endpoint.smsverify, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.Status) {
          navigation.navigate('Login');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.imageContainerLabel}>{label}</Text>
        <TextInput
          style={styles.customInput}
          onChangeText={handleInput}
          value={token}
          placeholder=""
          keyboardType="number-pad"
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.customButton}>
        <Text style={styles.customButtonLabel}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  content: {
    position: 'relative',
    display: 'flex',
  },
  imageContainerLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  customInput: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    fontSize: 40,
    letterSpacing: 35,
    textAlign: 'center',
    borderColor: 'gainsboro',
  },
  customButton: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: materialTheme.primary,
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },
  customButtonLabel: {
    color: 'white',
  },
});

export default SMSVerify;
