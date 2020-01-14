import React, { Component } from 'react'
import { View, SafeAreaView, Text, Image, Dimensions, StyleSheet } from 'react-native'
import gradient from '../../../assets/gradient.png'
import key from '../../../assets/key_Icon.png'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import HomeButton from '../homeButton/homeButton'
import { Header, Left, Body, Right,Icon } from 'native-base'
import { NavigationService } from '../../services'

const { height, width, fontScale } = Dimensions.get('screen')

export default class ForgetPassword extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header style={styles.headerStyle}>

                    <Left style={{ flex: 0.19 }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate("AuthContainer")}>
                            <Icon
                                name="arrowleft"
                                type="AntDesign"
                                fontSize={20}
                                style={{ color: '#707070' }}
                            />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ flexDirection: 'row', justifyContent: 'center' }}>
                     
                            {/* <HomeButton /> */}
                       
                    </Body>
                    <Right style={{ flex: 0.3 }}>
                        {/* <Icon
                            name="search"
                            type="EvilIcons"
                            fontSize={23}
                            style={{ color: '#707070' }}
                        /> */}
                    </Right>
                </Header>
                <View style={{ justifyContent: 'flex-end', alignItems: 'center', height: 50 }}>
                    <Text style={{ color: '#454F63', fontSize: fontScale * 18, fontWeight: '600', bottom: 10 }}>
                        Forgot Password
                  </Text>
                    <Image source={gradient} style={{ width: width }} />
                </View>
                <View style={{ height: height * 0.75, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: '95%', backgroundColor: "white", borderWidth: 1, width: '90%', borderRadius: 18, borderColor: '#959DAD', alignItems: 'center' }}>
                        <View style={{ height: '20%', justifyContent: 'center', alignItems: 'center',marginTop:5 }}>
                            <Image source={key} />
                        </View>
                        <View style={{ height: '35%', alignItems: 'center', width: '70%', marginTop: 10 }}>
                            <Text style={{ fontSize: fontScale * 28, color: '#454F63', height: 60 }}>
                                Forgot Password
                           </Text>
                            <Text style={{ textAlign: 'center', color: '#454F63', width: '100%', fontSize: fontScale * 12 }}>
                                We just need your registered Email Id to send you password reset instruction.
                           </Text>
                        </View>
                        <View style={{ width: width * 0.8 }}>
                            <Text style={{ fontSize: fontScale * 18, fontWeight: '600', color: '#2A2E43' }}>
                                Email
                            </Text>
                            <TextInput placeholder="example@gmail.com" placeholderTextColor="#959DAD" style={{ borderBottomColor: '#2A2E43', borderBottomWidth: 1, height: 40, paddingTop: 8 }} />
                        </View>
                        <TouchableOpacity style={styles.continueOpacity}>
                            <Text style={{ textAlign: 'center', fontSize: fontScale * 20, fontWeight: '600', color: 'white', margin: 12 }}>
                                SEND
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    continueOpacity: {
        backgroundColor: '#FF3100',
        borderRadius: 10,
        alignSelf: 'center',
        width: width * 0.8,
        marginTop: 60
    },
    headerStyle:{
        backgroundColor: 'white',
        height: 60,
        flexDirection: 'row',
        width: '100%',
        borderColor: 'white',
        elevation: 0,
        alignItems: 'center',
        borderBottomWidth: 0,
    }
})