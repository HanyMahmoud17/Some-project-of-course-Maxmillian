import {Text,StyleSheet,Platform} from 'react-native'


function Title({children,stylees}){
    return <Text style={[styles.text,stylees]}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontFamily:'open-sans-bold',
        fontSize:24,
        // fontWeight:'bold',
        borderColor:"white",
        borderWidth: Platform.OS === 'android' ? 1 : 0,
        borderRadius: Platform.OS === 'android' ? 25 : 0,
        padding:12,
        marginTop:12,
        textAlign:'center',

    }
})