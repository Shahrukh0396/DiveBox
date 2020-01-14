/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler
} from 'react-native';
import {
  View,
  Text,
  Header,
  Left,
  Body,
  Right,
  Icon,
  List,
  ListItem,
} from 'native-base';
import Profile from '../../../assets/avatar.png';
import { NavigationService } from '../../services';
const {height, width, fontScale} = Dimensions.get('screen');

class Payment3 extends Component {


    componentWillMount(){   
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }

      componentWillUnmount(){ 
          BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
      }


      handleBackButton = () => {
      NavigationService.navigate("Main");
      return true
      } 


  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.MenuOuterFirstView}>
          <View style={styles.FirstInnerView}>
            <Image
              source={Profile}
              style={{width: '25%', height: '40%', borderRadius: 50}}
            />
            <View style={styles.tagTextOuter}>
              <View style={styles.textTextInner}>
                <Text style={styles.tagText}>4.5</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              bottom: 20,
            }}>
            Yassine
          </Text>
        </View>
        <View style={styles.MenuOuterSecondView}>
          <TouchableOpacity onPress={() => NavigationService.navigate("EditProfile")} style={styles.MenuTextOpacity}>
            <Text style={styles.fontSizeMenu}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate("Payment")} style={styles.MenuTextOpacity}>
            <Text style={styles.fontSizeMenu}>
              Payment Method: Visa (***897)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate("Payment2")} style={styles.MenuTextOpacity}>
            <Text style={styles.fontSizeMenu}>
              Bank Details: Account # 123***
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate("ChangePasswordComponent")} style={styles.MenuTextOpacity}>
            <Text style={styles.fontSizeMenu}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate("AuthContainer")} style={styles.MenuTextOpacity}>
            <Text style={styles.fontSizeMenu}>Logout</Text>
          </TouchableOpacity>
          <View />
        </View>
        <View style={styles.HeaderAbsolute}>
          <Header style={styles.MainHeader}>
            <Left>
                <TouchableOpacity onPress={() => NavigationService.navigate("Main")}>

              <Icon
                type="AntDesign"
                name="arrowleft"
                style={{color: 'white'}}
                />
                </TouchableOpacity>
            </Left>
            <Body />
            <Right />
          </Header>
        </View>
      </View>
    );
  }
}

export default Payment3;

const styles = StyleSheet.create({
  FirstInnerView: {
    flex: 1,
    //   backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: '10%',
  },
  HeaderAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  MainHeader: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  MenuOuterFirstView: {
    flex: 0.6,
    backgroundColor: '#e53a19',
  },
  MenuOuterSecondView: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  MenuTextOpacity: {
    padding: '5%',
    left: 50,
  
  },
  fontSizeMenu: {
    fontSize: fontScale * 16,
    color:'#282F39',
    height:25,
  },
  textTextInner: {
    backgroundColor: '#2a2e43',
    width: '40%',
    height: '180%',
    borderRadius: 6,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    
  },
  tagTextOuter: {
    position: 'absolute',
    width: '20%',
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
    height: 14,
  },
  tagText: {
    // backgroundColor: 'red',
    fontSize: fontScale * 16,
    textAlign: 'right',
    color: 'white',
    right: 2,
  },
});
