import { View , Text , StyleSheet} from "react-native";
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

const styles = StyleSheet.create({
    conatainer: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent:'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily:'open-sans-bold',
        //fontWeight:'bold',
    },
});