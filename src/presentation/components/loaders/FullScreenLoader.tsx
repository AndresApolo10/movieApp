/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ActivityIndicator, View} from 'react-native';

export const FullScreenLoader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <ActivityIndicator size="large" color={'indigo'} />
    </View>
  );
};
