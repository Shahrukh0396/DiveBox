import React, { Component } from 'react'
import { Dimensions, Image, TouchableOpacity, Modal } from 'react-native'
import { Icon, ListItem, List, Left, Body, Right, View, Text } from 'native-base'
import gradient from '../../../assets/gradient.png'
import { NavigationService } from "../../services";
import image7 from '../../../assets/Image14.png'
import John from '../../../assets/john1.png'
import Call from "../../../assets/Call.png"
import Border from "../../../assets/border.png"
const { height, width, fontScale } = Dimensions.get('screen')

export const ConfirmedOrder = ({ orderFunction }) => (


    <Modal
        animationType="slide"
        transparent={true}
    >
        <View style={{ height: height * 0.8, marginTop: 300, backgroundColor: 'rgb(44,46,69)', borderTopLeftRadius: 5, borderTopRightRadius: 5, }}>
            <View style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: 'rgb(44,46,69)' }}>
                <TouchableOpacity  onPress={orderFunction}>

                <Image source={gradient} style={{ width: '98%', alignSelf: 'center', top: 0, zIndex: 100, height: 10, borderTopLeftRadius: 15, borderTopRightRadius: 15, }} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#707070', height: 2, marginTop: 10, width: '40%', alignSelf: 'center' }}>


            </View>
            <View style={{ backgroundColor: 'rgb(44,46,69)', height: height * 0.1, flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 20 }}>

                <View style={{ width: '100%', top: 20 }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '10%', position: 'absolute', top: 20, left: 0 }}>

                        <TouchableOpacity onPress={orderFunction}>
                            <Icon type="Entypo" name="chevron-thin-down" style={{ fontSize: 14, color: "#707070", marginLeft: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={orderFunction}>
                        <Text style={{ color: 'white', fontSize: fontScale * 16, left: 50, top: 5, }}>
                            Current Orders
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', left: 50, fontSize: fontScale * 12, top: 5, }}>
                        <Text style={{ color: 'red' }}> (1)</Text> orders confirmed and scheduled
                        </Text>
                </View>
            </View>
            <View style={{ height: '50%' }}>
                <View style={{ height: '40%', top: 50 }}>
                    <View>
                        <List style={{ backgroundColor: '#50536A', marginHorizontal: 20, borderRadius: 10 }}>
                            <ListItem style={{ width: '90%', alignSelf: "flex-start", height: 100, borderBottomColor: 'white', borderBottomWidth: 2 }}>
                                <Left style={{ flex: -0.3 }}>
                                    <Image source={image7} style={{ marginHorizontal: 10 }} />
                                </Left>
                                <Body >
                                    <View style={{ flexDirection: 'column', width: '95%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>

                                            <Text style={{ textAlign: "left", fontSize: fontScale * 14, color: 'white' }}>

                                                Fawsin Calculus Textbook
                                                    </Text>
                                            <Text style={{ textAlign: "left", fontSize: fontScale * 14, color: 'white' }}>    $51.53 </Text>
                                        </View>
                                        <Text style={{ textAlign: "left", fontSize: fontScale * 12, color: 'white' }}>
                                            Barely Used. 20 min away
                                                </Text>
                                    </View>
                                </Body>
                                <Right style={{ flex: 0 }} />
                            </ListItem>

                            <ListItem  style={{ width: '75%', alignSelf: "center", height: 100, borderBottomWidth: 0 }}>
                                <Left style={{ flex: -0.3 }}>
                                    <Image source={John} style={{ marginHorizontal: 10 }} />
                                </Left>
                                <Body  >
                                    <View style={{ flexDirection: 'column', width: '95%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between", height: 20 }}>
                                            <TouchableOpacity onPress={() => NavigationService.navigate("OrderOnTheWay")}>
                                                
                                            <Text style={{ textAlign: "left", fontSize: fontScale * 14, color: 'white' }}>

                                                John Doe
                                                    </Text>
                                            </TouchableOpacity>

                                                    <TouchableOpacity onPress={() => NavigationService.navigate("CallCarrier")}>

                                            <Image source={Call} style={{ marginHorizontal: 10, top: 0 }} />
                                                    </TouchableOpacity>
                                        </View>
                                        <Text style={{ textAlign: "left", fontSize: fontScale * 11, color: '#B2B4BE' }}>
                                            BMW ABC - YT1234
                                                </Text>
                                    </View>
                                </Body>
                                <Right style={{ flex: 0 }} />
                            </ListItem>
                        </List>
                    </View>
                </View>
            </View>
        </View>
    </Modal>

)