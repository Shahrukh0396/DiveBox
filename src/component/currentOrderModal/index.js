import React, { Component } from "react";
import { Image, Dimensions } from "react-native"
import { View, Text, Icon } from "native-base";
import gradient from '../../../assets/gradient.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationService } from "../../services";
const {height,width,fontScale} = Dimensions.get("screen")


export const ConfirmOrder = ({orderFunction}) => (
    <View>
        <View style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: 'rgb(44,46,69)' }}>
            <Image source={gradient} style={{ width: '97%', alignSelf: 'center', top: 0, zIndex: 100 }} />
        </View>
        <View style={{ backgroundColor: 'rgb(44,46,69)', height: height * 0.09, flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 20 }}>

                                <View style={{width:'100%'}}>
                                
                                <View style={{justifyContent:'center',alignItems:'center',width:'10%',position:'absolute',top:20,left:0}}>
                                        
                                        <TouchableOpacity onPress={orderFunction}>
                                            <Icon type="Entypo" name="chevron-thin-up" style={{fontSize:14,color:"#707070",marginLeft:20}} />
                                        </TouchableOpacity>
                                </View>
                               <TouchableOpacity onPress={orderFunction}>
                                <Text style={{ color: 'white', fontSize: fontScale * 16, left: 50,top:5 ,height:27}}>
                                    Current Orders
                                </Text>
                               </TouchableOpacity>
                                <Text style={{ color: '#707070', left: 50,fontSize:fontScale*12,top:5 }}>
                                    (0) orders confirmed and scheduled.
                            </Text>
                                </View>
            </View>
        </View>
 
)