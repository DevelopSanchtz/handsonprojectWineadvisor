import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';

function App(): JSX.Element {
  return (
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
  );
}

export default App;