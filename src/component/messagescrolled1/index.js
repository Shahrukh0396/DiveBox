/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  BackHandler
} from 'react-native';
import {
  View,
  Text,
  Title,
  Header,
  Left,
  Body,
  Right,
  Icon,
  List,
  ListItem,
  Container,
} from 'native-base';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Profile from '../../../assets/avatar.png';
import Profile1 from '../../../assets/Image14.png';

import { NavigationService } from '../../services';
const {height, width, fontScale} = Dimensions.get('screen');

class MessageScrolled1 extends Component {

    componentWillMount(){   
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){ 
        BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
    }


    handleBackButton = () => {
    NavigationService.navigate('MessageSell3Component', { modalVis: false})
    return true
    } 


  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <KeyboardAvoidingView
          enabled
          behavior="padding"
          style={{flex: 1}}
          > */}
        <ScrollView style={{flex: 1}} contentContainerStyle={{paddingTop: 70}}>
          <View
            style={{
              flex: 1.2,
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 15,
                marginHorizontal: '5%',
              }}>
              <View
                style={{
                  padding: '10%',
                  backgroundColor: '#78849e',
                  borderRadius: 10,
                  margin: '7%',
                }}>
                <Text style={{color: 'white', alignContent: 'center'}}>
                  Ok great, and it is still available?
                </Text>
              </View>

              <View
                style={{
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  borderWidth: 6,
                  borderColor: 'white',
                }}>
                <Image
                  source={Profile}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    zIndex: 9,
                  }}
                />
              </View>
            </View>
            <Text style={{textAlign: 'center', color: '#78849E'}}>
              YESTERDAY, 7:43 PM
            </Text>
            <View
              style={{
                borderRadius: 15,
                marginHorizontal: '5%',
              }}>
              <View
                style={{
                  padding: '10%',
                  backgroundColor: '#ff3100',
                  borderRadius: 10,
                  margin: '7%',
                }}>
                <Text style={{color: 'white', alignContent: 'center'}}>
                  Hi Yassine, Yes - it is still available!
                </Text>
              </View>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  borderWidth: 6,
                  borderColor: 'white',
                }}>
                <Image
                  source={Profile}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    zIndex: 9,
                  }}
                />
              </View>
            </View>
           
            <View
              style={{
                borderRadius: 15,
                marginHorizontal: '5%',
              }}>
         
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  borderRadius: 15,
                  borderWidth: 6,
                  borderColor: 'white',
                }}>
                <Image
                  source={Profile}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    zIndex: 9,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: '10%',
            // alignSelf: "flex-end",
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'transparent',
          }}>
          <TextInput
            placeholder="Say Something..."
            placeholderTextColor="#78849E"
            style={{
              backgroundColor: 'white',
              padding: 10,
              position: 'absolute',
              width: '90%',
              fontSize: 18,
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            right: 0,
            height: 70,
          }}>
          <Header
            style={{
              // position: "absolute",
              top: 0,
              left: 0,
              width: '100%',
              right: 0,
              height: 80,
              backgroundColor: 'rgba(238,238,238,0.5)',
            }}>
            <Left style={{flex:0.1}}>
              <TouchableOpacity onPress={() => NavigationService.navigate("MessageContainer")}>
                
              <Icon type="AntDesign" name="arrowleft"  />
              </TouchableOpacity>
            </Left>
            <Body >
              <View style={{alignItems: 'center',alignSelf:'center',marginRight:15}}>
                <Image
                  source={Profile1}
                  style={{width: 40, height: 40, borderRadius: 10}}
                />
                <Text>Fawsin Calculus ...</Text>
              </View>
            </Body>
            <Right style={{flex: 0}} />
          </Header>
        </View>

        {/* </KeyboardAvoidingView> */}
      </View>
    );
  }
}

export default MessageScrolled1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  inputTextStyle: {
    backgroundColor: 'white',
    padding: 16,
    fontSize: 18,
    borderRadius: 20,
  },
});
