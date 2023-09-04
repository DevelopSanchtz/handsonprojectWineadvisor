import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { User } from '../interface/userInterface';

export type RootStackParamList = {
  Home: undefined,
  Detail: User
}

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: "white",
            }
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator