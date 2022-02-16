import { StyleSheet, Text, View  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';

export default function LiveRadioScreen({ navigation }: RootTabScreenProps<'LiveRadio'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});