import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { User } from '../interface/userInterface'

interface Props {
   user: User
}

const UserListCard = ({user}: Props) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity 
          style = {styles.card}
          activeOpacity={0.7}
          onPress={ () => navigation.navigate('Detail', user)}
        >
          <View>
            <Text style = {styles.firstName}>{user.first_name}</Text>
            <Text style = {styles.lastName}>{user.last_name}</Text>
          </View>
          <Icon style = {styles.iconProfile} name='person-circle-outline' size={38} color="black" />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "white",
        height: 80,
        width: '80%', 
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10, 
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
        marginBottom: 25
    },
    firstName: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#333'
    },
    lastName: {
        fontSize: 22,
        fontWeight: "400",
        color: '#666' 
    },
    iconProfile: {
        marginRight: 5
    }
  })

export default UserListCard