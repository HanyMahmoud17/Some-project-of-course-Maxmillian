import { Dimensions, StyleSheet,View } from "react-native";
import Colors from "../../constants/Colors";


function Card({children}){
return (
    <View style={styles.inputContainer}>
        {children}
    </View>
)

}

export default Card;

const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer:{
        // flex: 1,
        marginTop:deviceWidth < 380 ? 18 : 36,
        marginHorizontal:24,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        // this for andriod boxShadow
        elevation:20,
        // this is for ios
        shadowColor:'balck',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
        alignItems:'center',
        justifyContent:'center'
    },
})