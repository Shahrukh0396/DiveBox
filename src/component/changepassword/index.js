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
import {Icon, Header, Left, Body, Right, Title} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';
const {height, width, fontScale} = Dimensions.get('screen');
// import Button from 'react-native-button';
import TabBar from '../../../assets/Diveboxasset/Diveboxasset/gradient.png';
import Pagination from '../../../assets/image_2019_12_30T12_24_45_427Z.png';
import {NavigationService} from '../../services';
import {ScrollView} from 'react-native-gesture-handler';
import GradiantBar from '../../../assets/gradientbig.png';

class ChangePasswordComponent extends Component {
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
        <View style={styles.mainContainer}>
          <Header style={{backgroundColor: 'transparent', elevation: 1}}>
            <Left style={{flex: 0}}>
              <TouchableOpacity onPress={() => NavigationService.navigate("Payment3")}>
                <Icon
                  type="AntDesign"
                  name="arrowleft"
                  style={{fontSize: 25}}
                />
              </TouchableOpacity>
            </Left>
            <Body style={{alignItems: 'center', flex: 1}} />
            <Right style={{flex: 0}} />
          </Header>

          <ScrollView
            style={{top: 15, height: '100%'}}
            contentContainerStyle={{height: height}}>
            <View
              style={{
                flex: 0.07,
                backgroundColor: '#2a2d44',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fontScale * 24,
                  color: 'white',
                }}>
                Change Password
              </Text>
            </View>
            <View style={{}}>
              <Image source={GradiantBar} style={{width: '100%'}} />
            </View>

            <View
              style={{
                alignItems: 'center',
                flex: 0.5,
                justifyContent: 'flex-end',
              }}>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Old Password"
                  onChangeText={text => this.setState({SignUpName: text})}
                />
              </View>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="New Password"
                  onChangeText={text => this.setState({SignUpEmail: text})}
                />
              </View>
              <View style={styles.TextInputView}>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Reset Password"
                  secureTextEntry={true}
                  onChangeText={text => this.setState({SignUpPassword: text})}
                />
              </View>
              <View>
                <TouchableOpacity
                 
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
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default ChangePasswordComponent;

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
