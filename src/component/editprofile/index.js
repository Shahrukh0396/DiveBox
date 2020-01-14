/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
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
// import Profile from '../../../assets/avatar.png';
import {NavigationService} from '../../services';
import GradiantBar from '../../../assets/gradientbig.png';
import Profile from '../../../assets/johnd.jpg';
const {height, width, fontScale} = Dimensions.get('screen');

class EditProfile extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* <View style={styles.HeaderAbsolute}> */}
        <Header style={styles.MainHeader}>
          <Left>
            <TouchableOpacity onPress={() => NavigationService.navigate("Payment3")}>

            <Icon type="AntDesign" name="arrowleft" style={{color: 'black'}} />
            </TouchableOpacity>
          </Left>
          <Body />
          <Right />
        </Header>
        {/* </View> */}
        <ScrollView contentContainerStyle={{height: 600}}>
          <KeyboardAvoidingView
            enabled={true}
            behavior="padding"
            style={{flex: 1}}>
            <View style={styles.InnerFirstView}>
              <View style={styles.EditProfileHeadView}>
                <Text style={styles.EditProfileText}>Edit Profile</Text>
              </View>
              <View style={styles.Flex1}>
                <View style={styles.ImageOuterOuterView}>
                  <View style={styles.ImageOuterView}>
                    <View style={styles.ImageView}>
                      <Image
                        source={Profile}
                        style={{
                          width: '100%',
                          height: '80%',
                          borderRadius: 150,
                        }}
                      />
                    </View>
                    <View style={styles.EditIcon}>
                      <TouchableOpacity>
                        <Icon
                          type="FontAwesome5"
                          name="pen"
                          style={{color: 'red', fontSize: 15}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.Flex1}>
                    <Text style={{color: 'white'}}>John Doe</Text>
                  </View>
                </View>
              </View>
              <View style={{backgroundColor: 'blue'}}>
                <Image source={GradiantBar} style={{width: '100%'}} />
              </View>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <View style={styles.SecondInnerView}>
                <View
                  style={styles.InputTextView}>
                  <Icon
                    type="Entypo"
                    name="user"
                    style={{fontSize: 25, color: '#f7462c'}}
                  />
                  <TextInput
                    placeholder="Name"
                    style={{width: '90%', left: 5}}
                  />
                </View>
                <View
                  style={{borderBottomWidth: 2, borderBottomColor: '#dfe0e3'}}
                />
                <View
                  style={styles.InputTextView}>
                  <Icon
                    type="Zocial"
                    name="email"
                    style={{fontSize: 25, color: '#f7462c'}}
                  />
                  <TextInput
                    placeholder="Email"
                    style={{width: '90%', left: 5}}
                  />
                </View>
                <View
                  style={{borderBottomWidth: 2, borderBottomColor: '#dfe0e3'}}
                />

                <View
                  style={styles.InputTextView}>
                  <Icon
                    type="MaterialCommunityIcons"
                    name="contacts"
                    style={{fontSize: 25, color: '#f7462c'}}
                  />
                  <TextInput
                    placeholder="Contact no"
                    style={{width: '90%', left: 5}}
                  />
                </View>
                <View
                  style={{borderBottomWidth: 2, borderBottomColor: '#dfe0e3'}}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default EditProfile;

const styles = StyleSheet.create({
  Flex1: {
    flex: 1,
  },
  InputTextView: {
    flexDirection: 'row',
    padding: 10,
    height:60,
    alignItems: 'center',
    // backgroundColor:'red'
  },
  SecondInnerView: {
    height:205,
    top: 70,
    paddingBottom: 80,
    width: '90%',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    paddingHorizontal: 15,
  },
  EditIcon: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: '#232940',
    borderColor: '#4d505f',
    padding: 5,
    bottom: 8,
  },
  ImageOuterView: {
    width: '28%',
    borderRadius: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ImageView: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  ImageOuterOuterView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  InnerFirstView: {
    height:250,
    backgroundColor: '#2f354d',
  },
  EditProfileHeadView: {
    height:40,
    backgroundColor: '#232940',
    justifyContent: 'center',
    borderBottomColor: '#454a5f',
    borderBottomWidth: 2,
  },
  EditProfileText: {
    textAlign: 'center',
    fontSize: fontScale * 22,
    color: 'white',
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
});
