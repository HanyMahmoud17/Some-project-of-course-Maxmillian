import { StyleSheet,Pressable,Text,View } from "react-native";


function PrimaryButton({children}){
return (
    <View style={styles.outerContainer}>
        <Pressable style={styles.innerContainer} android_ripple={{color:'#640233'}}>

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
        backgroundColor:'red',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:8,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    }

})