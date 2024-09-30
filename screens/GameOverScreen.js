import { Image , View ,Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundNumber,userNumber,onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.hightLight}> {roundNumber} </Text>rounds
                to guess the number <Text style={styles.hightLight}> {userNumber} </Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems:'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width:'100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical:24,
    },
    hightLight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});