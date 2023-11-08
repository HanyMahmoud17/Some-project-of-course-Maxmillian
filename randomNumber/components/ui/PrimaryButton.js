import { StyleSheet,Pressable,Text,View } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({children,onPress}){
return (
    <View style={styles.outerContainer}>
        {/* here i use the destruction to get the prop pressed which it is boolean  */}
        <Pressable onPress={onPress} style={({pressed})=> pressed ? [styles.innerContainer,styles.pressed] : styles.innerContainer} android_ripple={{color:Colors.primary600}}>

        <Text style={styles.buttonText}>{children}</Text> 
        </Pressable>
    </View>
    
) 
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer:{
        margin:4,
        borderRadius:28,
        overflow: 'hidden', //to hide any out effect
    },
    innerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:8,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    // this to effect on ios
    pressed:{
        opacity:0.75
    }

})