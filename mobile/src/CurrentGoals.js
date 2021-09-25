import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {materialTheme} from './utils/config';

const CurrentGoals = ({label = 'CurrentGoals', currentGoals}) => {
  const reModel = {
    'Goal Name': currentGoals.name,
    'Goal Type': currentGoals.goal_type,
    'Amount Saved': `RM ${currentGoals.amount_saved}`,
    'Target Days': currentGoals.days,
    'Days Left': currentGoals.days_left,
    'End Date': currentGoals.endDate,
  };

  console.log({currentGoals});
  return (
    <View style={styles.root}>
      <View style={styles.customCard}>
        <View
          style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
          <Text style={styles.percentageLabel}>
            {currentGoals?.percentage}%
          </Text>
          <Text style={styles.percentageLabelSub}>Current Saving</Text>
        </View>
        {Object.keys(reModel)?.map((mod, key) => {
          return (
            <View
              key={key.toString()}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
                marginTop: 20,
              }}>
              <Text
                style={{
                  position: 'relative',
                  width: 120,
                  top: 1.5,
                  color: 'gainsboro',
                }}>
                {mod}
              </Text>
              <Text style={{color: 'white', fontSize: 18}}>{reModel[mod]}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 490,
    width: '100%',
    padding: 10,
  },
  customCard: {
    position: 'relative',
    display: 'flex',
    // alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: materialTheme.dark,
    height: '100%',
    width: '100%',
  },
  percentageLabel: {
    position: 'relative',
    color: 'white',
    fontSize: 80,
  },
  percentageLabelSub: {
    position: 'relative',
    color: 'white',
    bottom: 5,
  },
});

export default CurrentGoals;
