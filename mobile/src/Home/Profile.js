import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const Profile = ({authentication, title = 'Profile'}) => {
  console.log({authentication});
  const guardModel = {
    Username: authentication.name,
    Email: authentication.email,
    Identification: authentication.ic_passport,
    'Phone Number': authentication.phoneno,
    'User Type': authentication.userType,
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.rootTitle}>{title}</Text>
      {Object.keys(guardModel).map((model, key) => {
        return (
          <View key={key.toString()} style={styles.customCard}>
            <View style={styles.customContent}>
              <Text style={styles.headerTitle}>{model}</Text>
              <Text style={styles.headerSubtitle}>{guardModel[model]}</Text>
            </View>
            <View style={styles.customDivider} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    padding: 10,
    bottom: 70,
    top: 0,
    left: 0,
    right: 0,
  },
  rootTitle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  customCard: {
    marginBottom: 8,
  },
  customContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingTop: 40,
    paddingBottom: 40,
  },
  customDivider: {
    borderWidth: 0.2,
    backgroundColor: 'gray',
  },
  headerTitle: {
    color: 'gray',
    fontSize: 15,
  },
  headerSubtitle: {
    position: 'absolute',
    fontSize: 15,
    fontWeight: 'bold',
    right: 5,
  },
});

export default Profile;
