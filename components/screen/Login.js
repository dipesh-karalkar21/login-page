import React,{ useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import LoginSignUpBTN from '../basiccomponents/LoginSignUpBTN';
import BasicButton from '../basiccomponents/BasicButton';
import { nominalTypeHack } from 'prop-types';
import SnackBar from '../basiccomponents/SnackBar';
export default function Login({navigation}){
    const[e_mail,setE_mail]=useState("")
    const[password,setPassword]=useState("")
    const[isVisible,setIsvisible]=useState(false)
    const[snacktype,setSnacktype]=useState("")
    const[snacktext,setSnacktext]=useState("")
    function LoginButtonClick(){
        console.log("Login Clicked")
        setSnacktype("success")
        setSnacktext("You are loged in successfully")
        setIsvisible(true)
    };
    function SignUpBtnClk(){
        console.log("Sign-Up Clicked")
    };
    function hideSnackBar(){
        setIsvisible(false)
    }
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>E-mail Id</Text>
                <TextInput style={styles.inputfield} placeholder="Enter Your E-mail Id" 
                keyboardType="email-address"
                ></TextInput>                
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.inputfield} placeholder="Enter Your Password" secureTextEntry></TextInput>                
            </View>
            <BasicButton text="Login" onPress={LoginButtonClick}/>
            {
                    isVisible?
                    <SnackBar
                        isVisible={isVisible}
                        text={snacktext}
                        type={snacktype}
                        onClose={hideSnackBar}
                    />
                    :null
                }
            <LoginSignUpBTN 
                customStyle={styles.signup} 
                text="Don't have an account"
                btnText="Sign-Up"
                onPress={()=>navigation.navigate("Signup")}
            />
        </ScrollView>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        marginTop:60,
        paddingHorizontal:30
    },
    title:{
        fontSize:20,
        fontWeight:"bold",

    },
    form:{
        marginVertical:30,

    },
    inputfield:{
        fontSize:14,
        borderBottomWidth:1,
        borderBottomColor:"#BFBFBF",
        paddingVertical:6,
    },
    label:{
        fontSize:16,
        lineHeight:18,
        color:"#666666",
        marginBottom:3
    },
    signup:{
        marginTop:40,
    },
});