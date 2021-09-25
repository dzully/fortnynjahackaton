import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Alert, VStack, HStack, IconButton, CloseIcon, Text} from 'native-base';

export const CustomAlert = ({title = '', handleClose}) => {
  return (
    <View style={styles.root}>
      <Alert w="100%" status="error" colorScheme="error">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {title}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              onPress={handleClose}
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
        </VStack>
      </Alert>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    display: 'flex',
    bottom: 10,
    left: 10,
    right: 10,
  },
});

export default CustomAlert;
