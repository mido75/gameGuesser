import { Image , View ,Text, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundNumber,userNumber,onStartNewGame}) {
    
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if (width < 330) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2,
    };
    
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer , imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summaryText}>Your phone needed
                    <Text style={styles.hightLight}> {roundNumber} </Text>rounds
                    to guess the number <Text style={styles.hightLight}> {userNumber} </Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems:'center',
    },
    imageContainer: {
       // width: deviceWidth < 330 ? 150 : 300,
        //height:deviceWidth < 330 ? 150 : 300,
        //borderRadius:deviceWidth < 330 ? 75 : 150,
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
    screen: {
        flex:1,
    },
});