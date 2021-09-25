import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
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

const ListCategory = ({category, headerTitle = 'Category'}) => {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
      <View style={styles.customDivider} />
      <View style={styles.cardContainer}>
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
            <View key={key.toString()} style={styles.customCard}>
              <Image style={styles.customImage} source={renderImage} />
              <Text style={styles.cardLabel}>{model.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    display: 'flex',
    padding: 10,
    height: '100%',
  },
  headerContainer: {
    position: 'relative',
    display: 'flex',
  },
  headerTitle: {
    fontSize: 18,
    // color: 'gray',
    fontWeight: 'bold',
  },
  customDivider: {
    height: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'gainsboro',
  },
  cardContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  customCard: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: materialTheme.primary,
    margin: 10,
    width: 110,
    minHeight: 100,
    padding: 10,
  },
  customImage: {
    width: 30,
    height: 30,
  },
  cardLabel: {
    marginTop: 5,
    color: 'white',
  },
});

export default ListCategory;
