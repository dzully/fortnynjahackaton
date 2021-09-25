import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
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
import {endpoint} from '../utils/endpoint';

const GoalSubmission = ({
  navigation,
  createGoals,
  duration,
  category,
  authentication,
}) => {
  const initDuration = duration?.filter(el => el.id === createGoals?.duration);
  const initCategory = category?.filter(el => el.id === createGoals?.duration);
  let getCurrentDuration = '';
  let getCurrentCategory = '';
  if (initDuration?.length > 0) {
    getCurrentDuration = initDuration[0];
  }
  if (initCategory?.length > 0) {
    getCurrentCategory = initCategory[0];
  }
  const [auth, setAuth] = useState({
    access_token: authentication.access_token,
    duration_id: createGoals.duration,
    category_id: createGoals.category,
    price: '',
    goal_name: '',
  });
  const handleHome = () => {
    navigation.navigate('Duration');
  };

  const handleInput = (event, label) => {
    setAuth({...auth, [label]: event});
  };

  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auth),
    };

    fetch(endpoint.goal, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status) {
          navigation.navigate('Home');
        }
      })
      .catch(error => console.log('error', error));
  };

  let renderImage = TravelIcon;
  if (getCurrentCategory.name === 'Gadgets') {
    renderImage = GadgetIcon;
  }
  if (getCurrentCategory.name === 'Fashion') {
    renderImage = FashionIcon;
  }
  if (getCurrentCategory.name === 'Marriage') {
    renderImage = WeddingIcon;
  }
  if (getCurrentCategory.name === 'College') {
    renderImage = CollegeIcon;
  }
  if (getCurrentCategory.name === 'Loans') {
    renderImage = LoanIcon;
  }
  if (getCurrentCategory.name === 'Parties') {
    renderImage = PartiesIcon;
  }
  if (getCurrentCategory.name === 'House bills') {
    renderImage = BillIcon;
  }
  if (getCurrentCategory.name === 'Birthday') {
    renderImage = BirtdayIcon;
  }
  if (getCurrentCategory.name === 'General Savings') {
    renderImage = SavingIcon;
  }

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
        <TextInput
          style={styles.customInput}
          onChangeText={event => handleInput(event, 'goal_name')}
          value={auth.password}
          placeholder="Goal Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.customInput}
          onChangeText={event => handleInput(event, 'price')}
          value={auth.password}
          placeholder="Saving Goals"
          keyboardType="number-pad"
        />
        <Text style={styles.headerCardLabel}>Selected Duration</Text>
        <View style={styles.customCard}>
          <View style={styles.cardLabelWrap}>
            <Text style={styles.cardLabel}>{getCurrentDuration?.days}</Text>
            <Text style={styles.cardLabelText}>Days</Text>
          </View>
          <View style={styles.cardLabelWrapCenter}>
            <Text style={styles.cardLabel}>{getCurrentDuration?.weeks}</Text>
            <Text style={styles.cardLabelText}>Weeks</Text>
          </View>
          <View style={styles.cardLabelWrap}>
            <Text style={styles.cardLabel}>{getCurrentDuration?.month}</Text>
            <Text style={styles.cardLabelText}>Month</Text>
          </View>
        </View>

        <Text style={styles.headerCardLabel}>Selected Category</Text>
        <View style={styles.customCardImage}>
          <Image style={styles.customImage} source={renderImage} />
          <Text style={styles.cardLabelImage}>{getCurrentCategory.name}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleSubmit} style={styles.customButton}>
        <Text style={styles.customButtonLabel}>Submit Goals</Text>
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
    borderRadius: 10,
  },
  headerBackButtonLabel: {
    width: 30,
    height: 30,
  },
  container: {
    position: 'absolute',
    top: 80,
    bottom: 80,
    left: 20,
    right: 20,
    // paddingTop: 20,
    // backgroundColor: 'red',
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

  headerCardLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
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
  cardLabel: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  cardLabelText: {
    color: 'white',
    fontSize: 25,
    bottom: 5,
  },

  customCardImage: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: materialTheme.dark,
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
  cardLabelImage: {
    color: 'white',
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },

  customButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 20,
    marginTop: 50,
    backgroundColor: materialTheme.primary,
  },
  customButtonLabel: {
    color: 'white',
  },
});

export default GoalSubmission;
