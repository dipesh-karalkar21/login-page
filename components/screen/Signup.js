import React from 'react'
import BasicButton from '../basiccomponents/BasicButton';
import { Audio } from 'expo-av';
import {TextInput, StyleSheet, Text,TouchableOpacity, View ,ScrollView } from 'react-native';
import LoginSignUpBTN from '../basiccomponents/LoginSignUpBTN';
import ValidationComponent from 'react-native-form-validator';
import {Picker} from '@react-native-picker/picker';
import ORDivider from '../basiccomponents/ORdivider';
import SnackBar from '../basiccomponents/SnackBar';
export default class Signup extends ValidationComponent{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            agegroup:'',
            password:'',
            confirmpassword:'',
            snackvisible:false,
            snacktype:'',
            snacktext:'',
        }
    }
    handleSigninBTNClk=()=>{
        
    }
    handleRegister=()=>{
        this.validate({
            name: {minlength:3, maxlength:7, required: true},
            email: {email: true, required: true},
            agegroup:{required: true},
            password:{required: true,hasNumber: true,hasUpperCase:	true,hasLowerCase:true},
            confirmpassword:{equalPassword:this.state.password,required: true},
          });
          if(this.getErrorMessages()){
              this.playAudio();
            this.setState({
                'snacktype':'error',
                'snacktext':this.getErrorMessages(),
                'snackvisible':true,
            });
          }
          else{
              this.playAudio();
            this.setState({
                'snacktype':'success',
                'snacktext':'Login Successful',
                'snackvisible':true,
            });
          }
    }
    hideSnackBar=()=>{
        this.setState({
            'snackvisible':false,
        });
    }
    playAudio=async()=>{
        try{
            const a=new Audio.Sound();
            await a.loadAsync(require('../../assets/ding2.mp3'));
            await a.playAsync();
        }
        catch{

        }
    }
    render(){
        return(
            <>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.inputfield} placeholder="Enter Your Name"
                        value={this.state.name}
                        onChangeText={(name)=>this.setState({name})}
                    ></TextInput>                
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>E=mail Address</Text>
                    <TextInput style={styles.inputfield} placeholder="Enter Your E-mail Address"
                     keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(email)=>this.setState({email})}
                    ></TextInput>                
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Age Group</Text>
                    <Picker style={styles.inputfield}
                        selectedValue={this.state.agegroup}
                        onValueChange={(agegroup, itemIndex) =>
                            this.setState({agegroup})
                        }>
                        <Picker.Item label="1-4" value="1-4" />
                        <Picker.Item label="5-12" value="5-12" />
                        <Picker.Item label="13-18" value="13-18" />
                        </Picker>

                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.inputfield} placeholder="Enter Your Password" secureTextEntry
                        value={this.state.password}
                        onChangeText={(password)=>this.setState({password})}
                    ></TextInput>                
                </View>
                <View style={styles.divider}>

                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput style={styles.inputfield} placeholder="Confirm Your Password" secureTextEntry
                        value={this.state.confirmpassword}
                        onChangeText={(confirmpassword)=>this.setState({confirmpassword})}
                    ></TextInput>                
                </View>
                <View style={styles.divider}>

                </View>
                <BasicButton text='Register'
                    onPress={this.handleRegister}
                />
                {
                    this.state.snackvisible?
                    <SnackBar
                        isVisible={this.state.snackvisible}
                        text={this.state.snacktext}
                        type={this.state.snacktype}
                        onClose={this.hideSnackBar}
                    />
                    :null
                }
                <ORDivider/>
                <LoginSignUpBTN
                    customStyle={styles.signup}
                    text='Already Have An Account'
                    btnText='Sign In'
                    onPress={()=>this.props.navigation.navigate("login")}
                />
            </ScrollView>
            </>
        );
    }
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
    divider:{
        paddingVertical:10,

    },
});