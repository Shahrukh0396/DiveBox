import React, { Component } from 'react';
import { SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView } from "react-native";
import { View, Text, Icon, Left, Right, Body, List, ListItem } from "native-base";
import LeftDot from "../../../assets/left.png";
import MapImage from "../../../assets/content.png"
import BigGradient from "../../../assets/gradientbig.png";
import Visa from "../../../assets/ic_payment_24px.png"
import { NavigationService } from '../../services';
const { height, fontScale } = Dimensions.get("screen")

handleBackButton = () => {
    NavigationService.navigate('MessageSell3Component', { modalVis: false})
  return true
  } 

class ConfrimPickup extends Component {

    render() {
        return (

            <SafeAreaView>
                <View style={{ height: "100%" }}>
                    <View style={{ height: height * 0.07, flexDirection: 'row' }}>

                     
                    <Left style={{justifyContent:'center',height:height*0.08,paddingLeft:20}}>
                        <TouchableOpacity onPress={() => NavigationService.navigate("MessageSell3Component", {modalVis:false})}>
                            
                        <Icon name="arrowleft" type="AntDesign" style={{fontSize: fontScale * 30 ,color:"#707070"}} />
                        </TouchableOpacity>
                    </Left>
                    <Body>

                        </Body>
                    </View>

                    <View style={{ height: height * 0.17, justifyContent: 'center', position: "relative", zIndex: 1000 }}>

                        <View style={{ backgroundColor: 'white', height: "95%", width: '93%', alignSelf: 'center', borderRadius: 10, borderWidth: 0.5, borderColor: "lightgrey" }}>
                            <View style={{ height: '100%', flexDirection: 'row' }}>
                                <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="dot-single" type="Entypo" style={{ fontSize: fontScale * 40, color: '#707070' }} />

                                    <Icon name="dots-three-vertical" type="Entypo" style={{ fontSize: fontScale * 15, color: "#707070" }} />

                                    <Icon name="dot-single" type="Entypo" style={{ fontSize: fontScale * 40, color: '#707070' }} />


                                </View>

                                <View style={{ width: '70%', height: '95%' }}>
                                    <List>
                                        <ListItem style={{ flexDirection: 'column', width: '100%', alignItems: 'flex-start', height: height * 0.08 }}>
                                            <View style={{ height: "100%" }}>

                                                <Text note style={{ textAlign: 'left', fontSize: fontScale * 12, color: '#959DAD' }}>
                                                    Seller Location
                                                        </Text>
                                                <Text style={{ fontSize: fontScale * 14, color: '#454F63' }}>
                                                    15 York Unit #1504
                                                        </Text>
                                            </View>
                                        </ListItem>
                                        <ListItem style={{ flexDirection: 'column', width: '100%', alignItems: 'flex-start', height: height * 0.08, borderBottomWidth: 0 }}>
                                            <View style={{ height: "100%" }}>

                                                <Text note style={{ textAlign: 'left', fontSize: fontScale * 12, color: '#959DAD' }}>
                                                    Destination Location
                                                        </Text>
                                                <Text style={{ fontSize: fontScale * 14, color: '#454F63' }}>
                                                    My Home
                                                        </Text>
                                            </View>
                                        </ListItem>
                                    </List>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: height * 0.26 }}>

                        <Icon name="crosshairs-gps" type="MaterialCommunityIcons" style={{ fontSize: fontScale * 20, color: '#707070', position: "absolute", bottom: 20, zIndex: 1000, alignSelf: 'flex-end', right: 40 }} />
                        <Image source={MapImage} style={{ width: '100%', height: "99%", zIndex: 0 }} />
                    </View>
                    <View style={{ backgroundColor: '#2A2E43', height: height * 0.42 }}>
                        <Image source={BigGradient} style={{ width: '100%' }} />

                        <Text style={{ fontSize: fontScale * 13, color: '#707070', textAlign: 'center', top: 14 }}>Estimated Delivery Time : 15 Mins</Text>


                        <ScrollView contentContainerStyle={{ justifyContent: 'space-evenly', height: 300, }} >
                            <List>
                                <ListItem style={{ borderBottomWidth: 0, width: '90%', alignSelf: 'center' }}>
                                    <Left style={{ flex: 0.2 }}>
                                        <Image source={Visa} />
                                    </Left>
                                    <Body>
                                        <Text style={{ color: "white", fontSize: 12 }}>
                                            Visa **** 3440
                                    </Text>
                                    </Body>
                                    <Right>
                                        <Icon name="down" type="AntDesign" style={{ fontSize: fontScale * 14, color: "white" }} />
                                    </Right>
                                </ListItem>
                                <ListItem style={{ borderBottomWidth: 0, width: '90%', alignSelf: 'center' }}>
                                    <Left style={{ flex: 0.2 }}>
                                        <Icon name="crosshairs-gps" type="MaterialCommunityIcons" style={{ fontSize: fontScale * 20, color: 'white' }} />

                                    </Left>
                                    <Body>
                                        <Text style={{ color: "#9F9F9F", fontSize: fontScale * 11 }}>
                                            228 Queens Quay West, Toronto
                                    </Text>
                                    </Body>
                                    <Right>
                                        <Icon name="down" type="AntDesign" style={{ fontSize: fontScale * 14, color: "white" }} />
                                    </Right>
                                </ListItem>
                            </List>
                            <View>
                                <Text style={{ color: "white", fontSize: fontScale * 22, textAlign: 'center' }}>
                                    $51.53
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: fontScale * 17, textAlign: 'center' }}>
                                    Total Cost
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => NavigationService.navigate("MessageSell3Component")} style={{ backgroundColor: "#FF3100", width: "80%", height: height * 0.06, borderRadius: 10, alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: fontScale * 16, color: 'white', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center' }}>
                                    Confirm Order
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}



export default ConfrimPickup




