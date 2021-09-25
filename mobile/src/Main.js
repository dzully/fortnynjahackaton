import React, {Fragment, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import GoalSubmission from './GoalSubmission';
import CreateGoals from './CreateGoals';
import Duration from './Duration';
import SMSVerify from './Signup/SMSVerify';
import {Store} from '../store';

const Stack = createNativeStackNavigator();

const Main = () => {
  const {state} = useContext(Store);
  const authentication = state.authentication;
  const signUpUserId = state?.signUpUserId;
  const category = state?.category;
  const duration = state?.duration;
  const createGoals = state?.createGoals;

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          {!authentication ? (
            <Fragment>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
              {signUpUserId ? (
                <Stack.Screen
                  navigation={event.navigation}
                  name="SMSVerify"
                  component={SMSVerify}
                />
              ) : null}
            </Fragment>
          ) : (
            <Fragment>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="CreateGoals"
                component={event => (
                  <CreateGoals
                    navigation={event.navigation}
                    category={category}
                  />
                )}
              />
              <Stack.Screen
                name="Duration"
                component={event => (
                  <Duration navigation={event.navigation} duration={duration} />
                )}
              />
              <Stack.Screen
                name="GoalSubmission"
                component={event => (
                  <GoalSubmission
                    navigation={event.navigation}
                    createGoals={createGoals}
                    category={category}
                    duration={duration}
                    authentication={authentication}
                  />
                )}
              />
            </Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
