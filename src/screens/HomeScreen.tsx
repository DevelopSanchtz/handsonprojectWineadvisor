import {
   Text,
   View,
   StyleSheet,
   ActivityIndicator,
} from 'react-native'
import useUsers from '../hooks/useUsers'
import UserList from '../components/UserList'

const HomeScreen = () => {
  const { isLoading } = useUsers()

  return (
      <View style = {styles.container}>

        <View style = {styles.header}>
          <Text style = {styles.title}>WINEADVISOR USERS</Text>
        </View>

        {
          isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
              <UserList/>
            )
        }

      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE2F8', //E0E8FF
    padding: 10,
    alignItems: 'center'
  },
  header: {
    marginBottom: 50,
    marginTop: 5,
    alignSelf: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 1.2
  },
  
});

export default HomeScreen