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
} from 'react-native';
import {Icon, Header, Left, Body, Right, Title} from 'native-base';
import Camera from '../../../assets/Group793.png';
import Location from '../../../assets/button-fab-gps.png';
import { NavigationService } from '../../services';
import { Dropdown } from 'react-native-material-dropdown';
const {height, width,fontScale} = Dimensions.get('screen');

const Country = [
    { value: "Category..."},
    { value: "Week"},
    { value: "Month"},
    { value: "Year"}
 ]

class SellAnItem extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor: 'transparent',elevation:0,borderBottomWidth:0}}>
        <Left style={{flex: -0.3}}>
            <TouchableOpacity onPress={() => NavigationService.navigate("Main")}>
              <Icon type="AntDesign" name="arrowleft" style={{fontSize:25,color:'#78849E'}} />
            </TouchableOpacity>
          </Left>
          <Body style={{alignItems: 'center'}}>
            <Title style={{color: '#454F63'}}>Sell</Title>
          </Body>
          <Right style={{flex: 0}} />
        </Header>
        <View style={styles.mainContainer}>
         {/* <View style={{flex: 0.5,backgroundColor:'blue'}} /> */}
          <TouchableOpacity>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#ff3100',
                // justifyContent: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Image source={Camera} style={{marginLeft: '30%'}} />
              <Text style={{textAlign: 'left', color: 'white', flex: 1}}>
                {'  '}
                Add a Profile Photo
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flex: 1.5,
               
              
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:10
            }}>
            <View
              style={{
                width: width / 1.1,
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <TextInput
                placeholder="Item Title..."
                placeholderTextColor="#78849E"
                style={{fontSize: fontScale * 16, padding: 15}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              //   backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:10
            }}>
            <View
              style={{
                width: width / 1.1,
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <TextInput
                placeholder="Item Details..."
                placeholderTextColor="#78849E"

                style={{fontSize: fontScale * 16, padding: 15}}
              />
            </View>
          </View>
       
          <View style={{ borderWidth: 0, borderRadius: 10, backgroundColor: 'white', padding: 5, width: "90%",alignSelf:'center',marginVertical:15, }}>
                             
                             <Dropdown labelFontSize={8}  itemTextStyle={{fontSize:10,color:'#78849E'}}
                                      
                                         pickerStyle={{marginTop:50,width:'77%',alignSelf:'center',marginHorizontal:18}} 
                                         inputContainerStyle={{borderBottomWidth:0 ,width:'97%',alignSelf:'center', height:40}}
                                         rippleInsets={{top: 0, bottom: -4 }}
                                          dropdownOffset={{top: 8, left: 0}}  
                                          data={Country}
                                        label="Category..."
                                          />
             </View>

             <View
            style={{
              flex: 1.5,
              //   backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:10
            }}>
            <View
              style={{
                width: width / 1.1,
                backgroundColor: 'white',
                borderRadius: 15,
              }}>
              <TextInput
                placeholder="Price"
                placeholderTextColor="#78849E"

                style={{fontSize: fontScale * 16, padding: 15}}
              />
            </View>
          </View>

        
             <View style={{ borderWidth: 0, borderRadius: 10, backgroundColor: 'white', padding: 5, width: "90%",alignSelf:'center',marginVertical:15, }}>
                             
                             <Dropdown labelFontSize={8}  itemTextStyle={{fontSize:10}}
                                         
                                         pickerStyle={{marginTop:50,width:'77%',alignSelf:'center',marginHorizontal:18}} 
                                         inputContainerStyle={{borderBottomWidth:0 ,width:'97%',alignSelf:'center', height:40}}
                                         rippleInsets={{top: 0, bottom: -4 }}
                                          dropdownOffset={{top: 8, left: 0}}  
                                          data={Country}
                                        label="Direct Deposit Account #123456"
                                          />
             </View>


         

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop:10,
             
              height:200
            }}>
            <View
              style={{
                flex: 1,
                padding: 10,
                backgroundColor:'white',
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

                    <Icon type="Entypo" name="dot-single" style={{color:"#78849E"}} />

                  <View >

                     <Text style={{color: '#78849E'}}>
                       Your Location
                      </Text>
                  </View>
                  </View>
                <Text note style={{fontSize: fontScale * 14,bottom:5,color:'#454F63',fontWeight:'bold'}}>         200 Queen's Query West</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <TouchableOpacity>
                  <Image source={Location} style={{}} />
                </TouchableOpacity>
              </View>

            </View>
          
          </View>
          <View style={{flex: 1.5, justifyContent: 'flex-end'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             
              <TouchableOpacity onPress={() =>  NavigationService.navigate("Menu56")} style={styles.continueOpacity}>
                <Text
                  style={{
                    textAlign: 'center',
                    margin: 15,
                    fontSize: 16,
                    color: 'white',
                  }}>
                 ADD ITEM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default SellAnItem;
const styles = StyleSheet.create({
  container: {
    height: height / 1,
  },
  mainContainer: {
    height: height * 0.8,
   top:20,
    justifyContent:"space-around"
  },
  continueOpacity: {
    backgroundColor: '#FF3100',
    borderRadius: 10,
    width: width / 1.4,
  },
  continueOpacityCancel: {
    backgroundColor: '#e9ebef',
    borderRadius: 10,
    width: width / 2.4,
  },
});
