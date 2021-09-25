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
import TravelIcon from '../assets/travelCase.png';
import GadgetIcon from '../assets/gadgets.png';
import BillIcon from '../assets/bill.png';
import CollegeIcon from '../assets/college.png';
import BirtdayIcon from '../assets/confetti.png';
import PartiesIcon from '../assets/dance.png';
import FashionIcon from '../assets/fashion.png';
import SavingIcon from '../assets/generalSaving.png';
import LoanIcon from '../assets/loan.png';
import WeddingIcon from '../assets/wedding.png';
import {MainCallback, Store} from '../../store';

const CreateGoals = ({
  navigation,
  category,
  headerTitle = 'Goals',
  headerSubtitle = 'Pick a category to start saving.',
}) => {
  const {dispatch} = useContext(Store);
  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleSelectCategory = id => {
    dispatch({
      type: MainCallback.HANDLE_CREATE_GOAL,
      label: 'category',
      value: id,
    });
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
        {category?.map((model, key) => {
          let renderImage = TravelIcon;
          if (model.name === 'Gadgets') {
            renderImage = GadgetIcon;
          }
          if (model.name === 'Fashion') {
            renderImage = FashionIcon;
          }
          if (model.name === 'Marriage') {
            renderImage = WeddingIcon;
          }
          if (model.name === 'College') {
            renderImage = CollegeIcon;
          }
          if (model.name === 'Loans') {
            renderImage = LoanIcon;
          }
          if (model.name === 'Parties') {
            renderImage = PartiesIcon;
          }
          if (model.name === 'House bills') {
            renderImage = BillIcon;
          }
          if (model.name === 'Birthday') {
            renderImage = BirtdayIcon;
          }
          if (model.name === 'General Savings') {
            renderImage = SavingIcon;
          }

          return (
            <TouchableOpacity
              key={key.toString()}
              onPress={() => handleSelectCategory(model.id)}
              style={styles.customCard}>
              <Image style={styles.customImage} source={renderImage} />
              <Text style={styles.cardLabel}>{model.name}</Text>
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
    flexDirection: 'row',
    backgroundColor: materialTheme.primary,
    height: 100,
    width: '100%',
    // borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
  },
  customImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  cardLabel: {
    color: 'white',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CreateGoals;
