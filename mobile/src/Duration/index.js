import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import BackButton from '../assets/left-arrow.png';
import {materialTheme} from '../utils/config';
import {MainCallback, Store} from '../../store';

const Duration = ({
  navigation,
  duration,
  headerTitle = 'Duration',
  headerSubtitle = 'Pick your duration for saving.',
}) => {
  console.log({duration});
  const {dispatch} = useContext(Store);
  const handleHome = () => {
    navigation.navigate('CreateGoals');
  };

  const handleSelectCategory = id => {
    dispatch({
      type: MainCallback.HANDLE_CREATE_GOAL,
      label: 'duration',
      value: id,
    });
    navigation.navigate('GoalSubmission');
  };

  return (
    <View style={styles.root}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <View style={styles.headerBack}>
        <TouchableOpacity style={styles.headerBackButton} onPress={handleHome}>
          <Image source={BackButton} style={styles.headerBackButtonLabel} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
        <Text style={styles.headerSubtitle}>{headerSubtitle}</Text>
        {duration?.map((model, key) => {
          return (
            <TouchableOpacity
              key={key.toString()}
              onPress={() => handleSelectCategory(model.id)}
              style={styles.customCard}>
              <View style={styles.cardLabelWrap}>
                <Text style={styles.cardLabel}>{model.days}</Text>
                <Text style={styles.cardLabelText}>Days</Text>
              </View>
              <View style={styles.cardLabelWrapCenter}>
                <Text style={styles.cardLabel}>{model.weeks}</Text>
                <Text style={styles.cardLabelText}>Weeks</Text>
              </View>
              <View style={styles.cardLabelWrap}>
                <Text style={styles.cardLabel}>{model.month}</Text>
                <Text style={styles.cardLabelText}>Month</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
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
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardLabelWrap: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLabelWrapCenter: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  cardLabelText: {
    color: 'white',
    fontSize: 25,
    bottom: 5,
  },
  headerBack: {
    position: 'relative',
    display: 'flex',
    marginTop: 10,
  },
  headerBackButton: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    // backgroundColor: 'red',
    borderRadius: 10,
  },
  headerBackButtonLabel: {
    width: 30,
    height: 30,
  },
  container: {
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 20,
    right: 20,
    // paddingTop: 20,
    // backgroundColor: 'red',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerSubtitle: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 10,
    letterSpacing: 1,
  },
  customCard: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: materialTheme.dark,
    height: 120,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
  },
  cardLabel: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default Duration;
