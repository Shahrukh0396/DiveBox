/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StatusBar,
} from 'react-native';
import {
  View,
  Text,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Header,
} from 'native-base';
import LeftDot from '../../../assets/left.png';
import Profile from '../../../assets/Image14.png';
import MapImage from '../../../assets/content.png';
import BigGradient from '../../../assets/gradientbig.png';
import Visa from '../../../assets/ic_payment_24px.png';
import { NavigationService } from '../../services';
const {height, fontScale} = Dimensions.get('screen');
import RatingModal from "../Modal/ratingModal"
class OrderOnTheWay extends Component {



  constructor(){
    super();
    this.state = {
      ratingmodal: false,
      footer: true
    }
  }

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
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden={true}  />
        <View style={{height:height * 0.06,flexDirection:'row',}}>

          <Left style={{justifyContent:'center',height:height*0.08,paddingLeft:20}}>
              <TouchableOpacity onPress={() =>  NavigationService.navigate('MessageSell3Component', { modalVis: false})}>
                  
              <Icon name="arrowleft" type="AntDesign" style={{fontSize: fontScale * 30 }} />
              </TouchableOpacity>
          </Left>
          <Body>

          </Body>
          </View>
          
                <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              
            }}>
         
            <Icon name="crosshairs-gps" type="MaterialCommunityIcons" style={{fontSize:fontScale * 20,color:'#707070',position:"absolute",bottom:230,zIndex:1000 ,alignSelf:'flex-end',right:40 }} />
              <Image source={MapImage} style={{width:'100%',height:'99%'}}  />
            <View style={{top: 10, alignItems: 'center',position:"absolute",zIndex:10,width:'100%'}}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: 'white',
                  width: '80%',
                  flexDirection: 'row',
                }}>
                <View style={{width: '15%', alignItems: 'center'}}>
                  {/* <View style={{}}> */}
                  <Icon
                    name="dot-single"
                    type="Entypo"
                    style={{fontSize: fontScale * 40, color: 'grey'}}
                  />
                  {/* </View>
                  <View> */}
                  <Icon
                    name="dots-three-vertical"
                    type="Entypo"
                    style={{fontSize: fontScale * 15, color: 'grey'}}
                  />
                  {/* </View>
                  <View> */}
                  <Icon
                    name="dot-single"
                    type="Entypo"
                    style={{fontSize: fontScale * 40, color: 'grey'}}
                  />
                  {/* </View> */}
                </View>

                <View style={{justifyContent: 'space-around'}}>
                  <View>
                    <Text
                      note
                      style={{textAlign: 'left', fontSize: fontScale * 12}}>
                      {' '}
                      Seller Location
                    </Text>
                    <View>
                      <Text style={{fontSize: fontScale * 14,color:'#454F63'}}>
                        15 York Unit #1504
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      note
                      style={{textAlign: 'left', fontSize: fontScale * 12}}>
                      {' '}
                      Destination Location
                    </Text>
                    <View>
                      <Text style={{fontSize: fontScale * 14,color:'#454F63'}}>My Home</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

           
          </View>

          {
                    this.state.ratingmodal ?
                      <RatingModal
                        visible={this.state.ratingmodal}
                        buttonText={"SUBMIT RATING"}
                        handleButton={() => this.setState({ ratingmodal: false })}
                      />
                      :null
                    } 

{this.state.footer ?

          <View
            style={{
              // flex: 0.8,
              height:200,
              alignItems: 'center',
              justifyContent: 'space-around',
              position:'absolute',
              bottom:0,
              width:'100%',
              backgroundColor: '#2a2e43',
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
              
            }}>
            {/* <ScrollView style={{bottom: 0, height: '30%'}}> */}
            <View style={{width: '85%', flexDirection: 'row'}}>
              <View>
                <Image source={Profile} />
              </View>
              <View style={{left: 10, justifyContent: 'center',width:'65%'}}>
                <Text style={{color: 'white', fontSize: fontScale * 14}}>
                  Fawsin Calculus Textbook
                </Text>
                <Text style={{color: 'white', fontSize: fontScale * 12}}>
                  Barely Used- 20 min away
                </Text>
              </View>
              <View style={{left: 25, top: 10}}>
                <Text style={{color: 'white', textAlign: 'right',fontSize:14}}>$51.53</Text>
              </View>
            </View>
            <View>
              <Text style={{color: 'white', fontSize: fontScale * 13}}>
                Ryan has picked up your order and is on the way.
              </Text>
            </View>
            <View style={{width:'80%',}}>
              <TouchableOpacity
              onPress={() => this.setState({ratingmodal:!this.state.ratingmodal,footer:!this.state.footer})}
                style={{
                  backgroundColor: '#ff3100',
                  padding: 15,
                  borderRadius: 15,
                  width:'100%'
                }}>
                <Text style={{color:"white",fontSize:12,textAlign:'center'}}>Estimated Delivery Time: 4 Min</Text>
              </TouchableOpacity>
            </View>
            {/* </ScrollView> */}
          </View>
           : null }
        </View>
      </SafeAreaView>
    );
  }
}

export default OrderOnTheWay;
