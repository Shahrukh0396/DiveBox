/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import MaterialTabs from 'react-native-material-tabs';
const {height, width, fontScale} = Dimensions.get('screen');
// import Button from 'react-native-button';
import TabBar from '../../../assets/Diveboxasset/Diveboxasset/gradient.png';
import Pagination from '../../../assets/image_2019_12_30T12_24_45_427Z.png';
import {NavigationService} from '../../services';
import { ScrollView } from 'react-native-gesture-handler';

class LogInSignUpComponent extends Component {
  state = {
    selectedTab: 0,
    Email: '',
    Password: '',
    SignUpName: '',
    SignUpPassword: '',
    SignUpEmail: '',
  };

  setTab(tab) {
    this.setState({selectedTab: tab});
  }
  render() {
    console.log(width, height, this.state.selectedTab, this.state.Email);
    return (
      <SafeAreaView style={styles.container}>
       
       {/* <StatusBar  barStyle="light-content" hidden={false} backgroundColor="rgba(45,46,67,0.5)" /> */}
        <View style={styles.mainContainer}>
          <View style={{height: 84, backgroundColor: 'white'}}>
            <View style={styles.PageOuterView}>
              <View style={styles.paginationInnerView}>
                <Image
                  source={Pagination}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  />
              </View>
            </View>
            <View>
              <MaterialTabs
                items={['SIGN IN', 'SIGN UP']}
                selectedIndex={this.state.selectedTab}
                onChange={this.setTab.bind(this)}
                barColor="white"
                activeTextColor="black"
                textStyle={{ color: 'black'}}
                />
                  
              <View
                style={{
                  width: width,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    visibilty: this.state.selectedTab === 0 ? '' : 'hidden',
                  }}>
                  {this.state.selectedTab === 0 && (
                    <Image
                    source={TabBar}
                    style={{
                      width: width / 2,
                    }}
                    />
                    )}
                </View>
                <View
                  style={{
                    right: 0,
                    visibilty: this.state.selectedTab === 1 ? '' : 'hidden',
                  }}>
                  {this.state.selectedTab === 1 && (
                    <Image source={TabBar} style={{width: width / 2}} />
                    )}
                </View>
              </View>
            </View>
          </View>
          <ScrollView style={{height:"100%"}} contentContainerStyle={{height:height}}>
          {this.state.selectedTab === 0 && (
            <View
            style={{
              alignItems: 'center',
              flex:0.5,
              justifyContent: 'flex-end',
              
          
            }}>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Email"
                  onChangeText={text => this.setState({Email: text})}
                  />
              </View>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState({Password: text})}
                  />
              </View>
              <View>
                <TouchableOpacity
                onPress={() => NavigationService.navigate("ForgetPassword")}
                  style={{
                    width: width / 1.2,
                    marginBottom: 40,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: fontScale * 14,
                      color: '#78849E',
                    }}>
                    FORGOT PASSWORD
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('Guide')}
                  style={styles.continueOpacity}>
                  <Text
                    style={{
                      textAlign: 'center',
                      margin: 20,
                      fontSize: fontScale * 16,

                      color: 'white',
                    }}>
                    CONTINUE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {this.state.selectedTab === 1 && (
              
            <View
             style={{
              alignItems: 'center',
              flex:0.5,
              justifyContent: 'flex-end',
              
          
            }}>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Name"
                  onChangeText={text => this.setState({SignUpName: text})}
                  />
              </View>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Email"
                  onChangeText={text => this.setState({SignUpEmail: text})}
                  />
              </View>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState({SignUpPassword: text})}
                  />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('CreateProfileComponent')}
                  style={styles.continueOpacity}>
                  <Text
                    style={{
                      textAlign: 'center',
                      margin: 20,
                      fontSize: fontScale * 16,
                      color: 'white',
                    }}>
                    CONTINUE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
        </View>
      
      </SafeAreaView>
    );
  }
}
export default LogInSignUpComponent;

const styles = StyleSheet.create({
  container: {
    height: height,
  },
  mainContainer: {
    height: height / 1,
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
  TextInputView: {
    height: height / 8,
    width: width / 1.2,
  },
  continueOpacity: {
    backgroundColor: '#ff3100',
    borderRadius: 10,
    width: width / 1.2,
  },
});
