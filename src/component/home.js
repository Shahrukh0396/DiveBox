import React, { Component } from 'react'
import { View, SafeAreaView, TextInput, Dimensions, Text, StyleSheet, Platform,
    FlatList, Image, TouchableOpacity,ScrollView , KeyboardAvoidingView } from 'react-native'
import {Icon , List, ListItem,Left,Right,Body } from "native-base";

import HomeDecor from '../../assets/Home-Decor.png'
import Football from '../../assets/Footballpic.png'
import image7 from '../../assets/Image7.png'
import friends from '../../assets/frieds.png'
import Dslr from '../../assets/dslr.png'
import skullpic2 from '../../assets/skullpic2.png'
import gradient from '../../assets/gradient.png'
import Tshirt from '../../assets/T-shirtpic.png'
import Path from '../../assets/path.png'
import TshirtLogo from '../../assets/T-shirt.png'
import Skull from '../../assets/skull.png'
import Music from '../../assets/music.png'
import Horse from '../../assets/horse.png'
import HomeIcon from '../../assets/icon.png'
import FootballLogo from '../../assets/foot-ball.png'
import image8 from '../../assets/Image8.png'




const { height, width , fontScale } = Dimensions.get('screen')



export default class Home extends Component {
    render() {

        return (
        
                <View style={{height:"100%"}}>
                    
                <SafeAreaView style={{height:Platform.OS === "ios" ? "100%" : null  }} >
                    <KeyboardAvoidingView  enabled behavior="padding" >

                 <View style={{ backgroundColor: 'rgb(44,46,69)', width: width, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: width * 0.9,height:'65%', borderRadius: 10, flexDirection: 'row', top:"1%",alignItems:'center' }}>
                        <Icon name="search" type="EvilIcons" color="#707070" />
                        <TextInput placeholder="Search" style={{height:40,width:"80%"}} placeholderTextColor="grey" />
                        <TouchableOpacity>

                                <Image source={Path} />
                        </TouchableOpacity>
                    </View>
                </View>
             <View style={{height:height/1.2,justifyContent:"space-around",flexDirection:'column'}}>

            
                <View>
                    <Text style={{ textAlign: 'left', fontSize: fontScale * 28, left: 30, marginTop:10 }}>
                        Popular Categories
                    </Text>
                </View>
                  
                <View style={{ height: 240  }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: 5 ,height:'50%' }}>
                        <TouchableOpacity>
                            <Image source={HomeDecor} style={{ backgroundColor: 'rgba(255,0,0,0.8)' }} />
                            <Image source={HomeIcon} style={{ position: 'absolute', left: 45, top: 45 }} />
                                    <Text style={{ textAlign: 'center', position: 'absolute', color: 'white', left: 20, top: 70 }}>Home Decor</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Tshirt} style={{ marginHorizontal: 10, backgroundColor: 'rgba(255,0,0,0.8)' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={Football} style={{ backgroundColor: 'rgba(255,0,0,0.8)' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,height:'50%' }}>
                        <TouchableOpacity>
                            <Image source={Dslr} style={{ backgroundColor: 'rgba(255,0,0,0.8)' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={friends} style={{ marginHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.7)' }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={skullpic2} style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                  
                <View>
                    <Text style={{ textAlign: 'left', fontSize: fontScale * 28, left: 30 , top:5 }}>
                        Recently Posted
                    </Text>
                </View>
                <View style={{backgroundColor:'yellow',height:'30%'}}>
                 
                    <View style={{borderColor:'lightgrey',borderWidth:0.8,width:"90%",left:20,borderRadius:10,top:10}}>

                        <List >
                            <ListItem style={{width:'90%',alignSelf:"flex-start",}}>
                                <Left style={{flex:-0.3}}>
                                <Image source={image7} style={{ marginHorizontal: 10 }} />
                                </Left>
                                <Body >
                                <View style={{ flexDirection: 'column' ,width:'95%' }}>
                                <View style={{flexDirection:'row', justifyContent:"space-between"}}>

                                <Text style={{textAlign:"left",fontSize:fontScale * 12}}>
                                
                                    Tassimo Coffee maker.          
                                </Text>
                                <Text style={{textAlign:"left",fontSize:fontScale * 12}}>    $40 </Text>
                                </View>
                                <Text style={{textAlign:"left",fontSize:fontScale * 11}}>
                                    Barely Used. 5 min ago. 20 min away
                            </Text>
                            </View>
                                </Body>

                                <Right style={{flex:0}} />
                            </ListItem>

                            <ListItem style={{width:'90%',alignSelf:"flex-start",}}>
                                <Left style={{flex:-0.3}}>
                                <Image source={image7} style={{ marginHorizontal: 10 }} />
                                </Left>
                                <Body >
                                <View style={{ flexDirection: 'column' ,width:'95%' }}>
                                <View style={{flexDirection:'row', justifyContent:"space-between"}}>

                                <Text style={{textAlign:"left",fontSize:fontScale * 12}}>
                                
                                    Tassimo Coffee maker.          
                                </Text>
                                <Text style={{textAlign:"left",fontSize:fontScale * 12}}>    $40 </Text>
                                </View>
                                <Text style={{textAlign:"left",fontSize:fontScale * 11}}>
                                    Barely Used. 5 min ago. 20 min away
                            </Text>
                            </View>
                                </Body>

                                <Right style={{flex:0}} />
                            </ListItem>
                        </List>
                      
                        {/* <View style={{borderTopColor:'lightgrey',borderTopWidth:1,marginHorizontal:10,marginVertical:20,}}></View> */}
                       
                    </View>

                    </View>
                    <View style={{borderTopLeftRadius:10,borderTopRightRadius:10,top:15}}>
                        <Image source={gradient} style={{width:width}}/>
                    </View>
                    <View style={{backgroundColor:'rgb(44,46,69)',height:"18%",top:15}}>
                       <Text style={{color:'white',fontSize:18,left:30}}>
                           Current Orders.
                       </Text>
                       <Text style={{color:'white',left:30}}>
                           (0) orders confirmed and scheduled.
                       </Text>
                    </View>
                </View> 
                    </KeyboardAvoidingView>
                </SafeAreaView> 
                </View>
           
        )
    }
}

var styles = StyleSheet.create({

});
