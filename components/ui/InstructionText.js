import { Text , StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children , style}) {
    return (
        <Text style={[styles.instructionInput , style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionInput: {
        fontFamily:'open-sans',
        color: Colors.accent500,
        fontSize:20,
    },
});