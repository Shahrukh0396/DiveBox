import React, { Component } from 'react'
import { View, Dimensions, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import {Icon} from 'native-base'
import {Dropdown} from "react-native-material-dropdown";
import { NavigationService } from '../../services';
import ModalComponent from '../Modal/modal';

const {height, width, fontScale} = Dimensions.get('screen')

export default class Payment extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVis : false,
            ratingmodal: false
        }

    }
    render() {
        return (
            <SafeAreaView>

            <View style={{ height: height,}}>
                 <View style={{ justifyContent: 'center', marginVertical:10 }}>
                     <TouchableOpacity onPress={() => NavigationService.navigate("Payment3")} style={{left:20}}>
                         <Icon type="AntDesign" name="arrowleft" style={{fontSize: fontScale*22,color:'#707070'}}/>
                     </TouchableOpacity>
                 </View>
                 <View style={{justifyContent:'center',}}>
                     <Text style={{fontSize: fontScale*38,fontWeight:'600',textAlign:'left',left:20,color:'#454F63'}}>
                         Payment
                     </Text>
                 </View>
                 <View style={{backgroundColor:'rgb(44,46,69)',height:height*0.2,top:30,marginHorizontal:20,borderRadius:10,flexDirection:'column'}}>
                     <View style={{flexDirection:'row',height:'50%',justifyContent:'flex-start',alignItems:'center',left:25,top:10}}>
                         <View style={{backgroundColor:'rgb(75,80,100)',height:50,borderRadius:10,width:'50%',justifyContent:'center'}}>
                             <Text style={{color:'grey',left:10,top:5,fontSize:12,height:'30%'}}>Card number </Text>
                             <TextInput placeholder="0123 4567 8910 1112" placeholderTextColor="white" style={{left:10,height:42,color:'white'}}/>
                         </View>
                         <View style={{backgroundColor:'rgb(75,80,100)',height:50,left:20,borderRadius:10,width:'30%',}}>
                             <Text style={{color:'grey',paddingLeft:8,top:5,fontSize:12,height:'30%'}}> Expires</Text>
                             <TextInput placeholder="MM/YY" placeholderTextColor="grey" style={{paddingLeft:12,height:'70%',color:'grey'}}/>
                         </View>
                     </View>
                     <View style={{flexDirection:'row',height:'50%',justifyContent:'flex-start',alignItems:'center',left:25,bottom:10}}>
                         <View style={{backgroundColor:'rgb(75,80,100)',height:50,borderRadius:10,width:'50%',justifyContent:'center'}}>
                             <Text style={{color:'grey',left:10,top:3,fontSize:12,height:'30%'}}> Name</Text>
                             <TextInput placeholder="JOHN DOE" placeholderTextColor="white" style={{left:10,height:42,color:'white'}}/>
                         </View>
                         <View style={{backgroundColor:'rgb(75,80,100)',height:50,left:20,borderRadius:10,width:'30%'}}>
                             <Text style={{color:'grey',paddingLeft:12,top:5,fontSize:12,height:'30%'}}>CVC</Text>
                             <TextInput placeholder="000" placeholderTextColor="grey" style={{paddingLeft:12,height:37,color:'grey'}}/>
                         </View>
                     </View>
                 </View>
                 <View style={{ borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white', paddingh: 5, width: "90%",alignSelf:'center',marginVertical:50, }}>
                             
                            <Dropdown labelFontSize={8}  itemTextStyle={{fontSize:10}}
                                        
                                        pickerStyle={{marginTop:50,width:'77%',alignSelf:'center',marginHorizontal:18}} 
                                        inputContainerStyle={{borderBottomWidth:0 ,width:'97%',alignSelf:'center', height:40}}
                                        rippleInsets={{top: 0, bottom: -4 }}
                                        dropdownOffset={{top: 8, left: 0}}  
                                        data={Country}
                                        label="Country"
                                        />
                            </View>
                            <View style={{ borderWidth: 0.5, borderRadius: 10, backgroundColor: 'white', paddingh: 5, width: "90%",alignSelf:'center',bottom:20 }}>
                             
                            <Dropdown labelFontSize={8}  itemTextStyle={{fontSize:10}}
                                        
                                        pickerStyle={{marginTop:50,width:'77%',alignSelf:'center',marginHorizontal:18}} 
                                        inputContainerStyle={{borderBottomWidth:0 ,width:'97%',alignSelf:'center', height:40}}
                                        rippleInsets={{top: 0, bottom: -4 }}
                                        dropdownOffset={{top: 8, left: 0}}  
                                        data = {City}
                                        label="City"
                                        />
                            </View>
                 <View style={{height:height*0.15,backgroundColor:'white',borderColor:'lightgrey',borderWidth:1,marginHorizontal:20,borderRadius:10}}>
                     <TextInput placeholder="Address" placeholderTextColor="#78849E" style={{left:5,fontSize:14}}/>
                 </View>
                 <View style={{flexDirection:'row',top:60,justifyContent:'center',alignItems:'center',}}>
                     <TouchableOpacity style={{alignSelf:'center',width:'40%',borderRadius:10,backgroundColor:'lightgrey'}}>
                         <Text style={{textAlign:'center',fontSize: fontScale * 18, color: 'rgb(71,78,97)', margin: 12 }}>
                             CANCEL
                         </Text>
                     </TouchableOpacity>
                     <TouchableOpacity  
                      onPress={() => NavigationService.navigate('MessageSell3Component', { modalVis: !this.state.modalVis})} 
                     style={styles.continueOpacity}>
                         <Text style={{fontSize: fontScale * 18, color: 'white', margin: 12 ,textAlign:'center'}}>
                             APPLY
                         </Text>
                     </TouchableOpacity>
                     {
                    this.state.modalVis ?
                      <ModalComponent
                        visible={this.state.modalVis}
                        buttonText={"Confirm Order"}
                        handleButton={() => this.setState({ modalVis: false })}
                      />
                      : null
                  }
                 </View>
            </View>
            </SafeAreaView>
        )
    }
}

const City = [
    { value: "Day"},
     { value: "Week"},
     { value: "Month"},
     { value: "Year"}
 ]

 const Country = [
    { value: "Day"},
    { value: "Week"},
    { value: "Month"},
    { value: "Year"}
 ]


const styles = StyleSheet.create({
    container: {
      height: height,
    },
    mainContainer: {
      height: height / 1,
      top: '3%',
      backgroundColor: '#f7f7fa',
    },
    textInputStyle: {
      backgroundColor: 'white',
      padding: 16,
      fontSize: 18,
      borderRadius: 20,
    },
    PageOuterView: {
      alignItems: 'center',
      width: width,
      height: 30,
      backgroundColor: 'white',
    },
    paginationInnerView: {
      height: 50,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
    },
    continueOpacity: {
      backgroundColor: '#ff3100',
      borderRadius: 10,
      alignSelf: 'center',
      width: '40%',
      left:10

    },
  });