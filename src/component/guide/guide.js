import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  BackHandler
} from 'react-native';
import Guidepic from '../../../assets/Guide.png';
import Guide2 from '../../../assets/Guidepic2.png';
import Pagination from '../../../assets/pagination.png';
import {NavigationService} from '../../services';
const {height, width, fontScale} = Dimensions.get('screen');

export default class Guide extends Component {

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
      <SafeAreaView style={{flex:1}}>
          <StatusBar  barStyle="light-content" hidden={false} backgroundColor="white" />
        <View style={{justifyContent: 'space-between', flex:1}}>
          <View style={{alignSelf: 'center', marginTop: 15}}>
            <Image
              source={Guidepic}
              style={{width: width * 0.9, borderRadius: 10, height: height*0.4}}
            />
            <Image
              source={Guide2}
              style={{position: 'absolute', bottom: 0, left: 50}}
            />
          </View>

          <View style={{height:"58%"}}>
            <View style={{flex:0.7,justifyContent:'center',flexDirection:'column',}} >
              <View>

              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 0.08*width,
                  fontWeight: 'bold',
                  color: '#707070',
                  marginLeft: 25,
                 
                  
                }}>
                Save money.
              </Text>
              </View>
              <View>

              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 0.08*width,
                  fontWeight: 'bold',
                  color: '#707070',
                  marginLeft: 25,
                }}>
                Save time.
              </Text>
                </View>

                <View>

              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  textAlign: 'left',
                  fontSize: 0.08*width,
                  fontWeight: 'bold',
                  color: '#707070',
                  marginLeft: 25,
                }}>
                Save the planet.
              </Text>
                </View>
            </View>
            <View style={{marginTop: 20, width: '90%', alignSelf: 'center',height:height*0.11}}>
              <Text style={{textAlign: 'center', fontSize: fontScale * 33,color: '#454F63',fontWeight:"bold"}}>
                Welcome
              </Text>
              <Text style={{textAlign: 'center', color: 'grey',fontSize:0.03*width,width:'83%',alignSelf:"center"}}>
                Experience local buy and sell with the convenience of on-demand
                delivery. Let's Get Started!
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: 30,
                flexDirection: 'row',
                alignItems: 'center',
               
                justifyContent: 'space-between',
                width: '60%',
                marginLeft:10
              }}>
              <View style={{flexDirection: 'row', paddingLeft: 20}}>
                <Image source={Pagination} style={{alignSelf: 'flex-start'}} />
              </View>

              <View style={{width: '10%'}}>
                <TouchableOpacity
                  onPress={() =>
                    NavigationService.navigate('DashboardDrawer')
                  }
                  style={{
                    backgroundColor: '#ff3100',
                    height: 40,
                    width: 90,
                    justifyContent: 'center',
                    borderRadius: 10,
                    alignSelf:"flex-end"
                  }}>
                  <Text
                    style={{textAlign: 'center', color: 'white', fontSize: 18}}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
