import { 
    StyleSheet,
    ScrollView, 
    Dimensions,
    View,
    Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigations/StackNavigator'

interface Props extends StackScreenProps<RootStackParamList, 'Detail'>{}

const screenHeight = Dimensions.get('screen').height

const DetailScreen = ({route}: Props) => {
    const {avatar, first_name, last_name, email}  = route.params
    
    return (
        <ScrollView>
            <FastImage
                style={styles.posterImage}
                source={{
                    uri: `${avatar}`,
                    priority: FastImage.priority.normal,
                }}
            />
            <View style={styles.infoCard}>
                <Text style={styles.title}>{first_name} {last_name}</Text>
                <View style={styles.emailContainer}>
                    <Icon name='mail-outline' size={20} color="grey" />
                    <Text style={styles.emailText}>{email}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    posterImage: {
        width: '100%',
        height: screenHeight * 0.7,
        resizeMode: "cover",
    },
    infoCard: {
        marginTop: -40,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        paddingBottom: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    emailText: {
        marginLeft: 15,
        fontSize: 18,
        color: '#666',
    },
});

export default DetailScreen;