import React, { Component } from 'react'
import { View, Dimensions, TouchableOpacity, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native'
import {Icon} from 'native-base'
import { NavigationService } from '../../services'

const {height, width, fontScale} = Dimensions.get('screen')

export default class Payment2 extends Component {
    render() {
        return (
            <SafeAreaView >
            <View style={{height:height/1.1}}>
                <View style={{ justifyContent: 'space-between' }}>
                     <TouchableOpacity  onPress={() => NavigationService.navigate("Payment3")}  style={{left:20,top:10}}>
                         <Icon type="AntDesign" name="arrowleft" style={{fontSize: fontScale*22}}/>
                     </TouchableOpacity>
                 </View>
                <View style={{justifyContent:'center',marginTop:15}}>
                    <Text style={{fontSize: fontScale*38,fontWeight:'600',textAlign:'left',left:20,color:'#454F63'}}>
                         Bank Details
                    </Text>
                </View>
                <View style={{flexDirection:'column',marginHorizontal:20}}>
                    <View style={{borderBottomColor:'#C0C8CF',borderBottomWidth:1,height:height*0.08,justifyContent:'center'}}>
                        <TextInput  placeholder="Bank Name" placeholderTextColor="#BBBBBB"/>
                        </View>
                    <View style={{borderBottomColor:'#C0C8CF',borderBottomWidth:1 ,height:height*0.08,justifyContent:'center'}}><TextInput placeholderTextColor="#BBBBBB" placeholder="Account Holder Name"/></View>
                    <View style={{borderBottomColor:'#C0C8CF',borderBottomWidth:1,height:height*0.08,justifyContent:'center'}}><TextInput placeholderTextColor="#BBBBBB" placeholder="Account Number"/></View>
                    <View style={{borderBottomColor:'#C0C8CF',borderBottomWidth:1 ,height:height*0.08,justifyContent:'center'}}><TextInput placeholderTextColor="#BBBBBB" placeholder="Swift/IFSC Code"/></View>
                </View>
                
                <View style={{justifyContent:'flex-end',flex:0.8}}>

                <View style={{top:0,marginHorizontal:20}}>
                    <Text style={{textAlign:'center',color:'#7F7F7F',fontSize:11}}>
                        By Continuing, I have confirmed that i have read
                         & agree to the Terms & Conditions and Privacy Policy. 
                    </Text>
                </View>
                <View style={{flexDirection:'row',top:50,justifyContent:'center',alignItems:'flex-end'}}>
                     <TouchableOpacity style={{alignSelf:'center',width:'40%',borderRadius:10,backgroundColor:'lightgrey'}}>
                         <Text style={{textAlign:'center',fontSize: fontScale * 18, color: 'rgb(71,78,97)', margin: 12 }}>
                             CANCEL
                         </Text>
                     </TouchableOpacity>
                     <TouchableOpacity  onPress={() => NavigationService.navigate("Main")}  style={styles.continueOpacity}>
                         <Text style={{fontSize: fontScale * 18, color: 'white', margin: 12 ,textAlign:'center'}}>
                             APPLY
                         </Text>
                     </TouchableOpacity>
                 </View>
                </View>
                 </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    continueOpacity: {
        backgroundColor: '#ff3100',
        borderRadius: 10,
        alignSelf: 'center',
        width: '40%',
        left:10
  
      },
})