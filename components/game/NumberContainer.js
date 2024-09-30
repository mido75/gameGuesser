import { View , Text , StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.conatainer}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    conatainer: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 330 ? 12 : 24,
        margin: deviceWidth < 330 ? 12 : 24 ,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent:'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize:  deviceWidth < 380 ? 28 : 36,
        fontFamily:'open-sans-bold',
        //fontWeight:'bold',
    },
});