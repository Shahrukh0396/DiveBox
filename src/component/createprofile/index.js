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
  TouchableOpacity,
  ListView,
  BackHandler
} from 'react-native';
import {Icon, Header, Left, Body, Right, Title} from 'native-base';
import Camera from '../../../assets/Group793.png';
import Location from '../../../assets/button-fab-gps.png';
import { NavigationService } from '../../services';
const {height, width,fontScale} = Dimensions.get('screen');
class CreateProfileComponent extends Component {
  componentWillMount(){   
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount(){ 
    BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
}


handleBackButton = () => {
NavigationService.navigate("AuthContainer");
return true
} 
  render() {
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'transparent'}}>
          <Left style={{flex: 0}}>
            <TouchableOpacity onPress={() => NavigationService.navigate("AuthContainer")}>
              <Icon type="AntDesign" name="arrowleft" style={{fontSize:25}} />
            </TouchableOpacity>
          </Left>
          <Body style={{alignItems: 'center', flex: 1}}>
            <Title style={{color: 'black',fontWeight:"bold", fontSize: fontScale*24}}>Create profile</Title>
          </Body>
          <Right style={{flex: 0}} />
        </Header>
        <View style={styles.mainContainer}>
          <View style={{flex: 0.5}} />
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#FF3100',
                // justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Camera} style={{marginLeft: '28%'}} />
              <Text style={{textAlign: 'left', color: 'white', flex: 1}}>
                {'  '}
                Add a Profile Photo
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1.5,
              //   backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: width / 1.1,
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <TextInput
                placeholder="Mobile Number"
                placeholderTextColor="#78849E"
                style={{fontSize: fontScale * 16, padding: 15,}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 15,
                alignItems: 'center',
                width: width / 1.1,
                // width: width / 1.1,
                // borderRadius: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View >
                  <View style={{flexDirection:'row', alignItems:"center"}}> 

                    <Icon type="Entypo" name="dot-single" style={{color:"#78849E",fontSize:32}} />

                  <View >

                     <Text style={{color: '#78849E'}}>
                       Your Location
                      </Text>
                  </View>
                  </View>
                <Text style={{fontSize: fontScale * 16,color:"#454F63"}}>        200 Queen's Query West</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <TouchableOpacity>
                  <Image source={Location} style={{}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 6, justifyContent: 'flex-end'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={styles.continueOpacityCancel}>
                <Text
                  style={{
                    textAlign: 'center',
                    margin: 15,
                    fontSize: 16,
                    color: '#454F63',
                  }}>
                  CANCEL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>  NavigationService.navigate("Guide")} style={styles.continueOpacity}>
                <Text
                  style={{
                    textAlign: 'center',
                    margin: 15,
                    fontSize: 16,
                    color: 'white',
                  }}>
                  APPLY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default CreateProfileComponent;
const styles = StyleSheet.create({
  container: {
    height: height / 1,
  },
  mainContainer: {
    height: height * 0.8,
    backgroundColor: '#f7f7fa',
  },
  continueOpacity: {
    backgroundColor: '#ff3100',
    borderRadius: 10,
    width: width / 2.4,
  },
  continueOpacityCancel: {
    backgroundColor: '#e9ebef',
    borderRadius: 10,
    width: width / 2.4,
  },
});
