/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
    View, SafeAreaView, TextInput, Dimensions, Text, StyleSheet, Platform,
    FlatList, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView,BackHandler
} from 'react-native'
import { Icon, List, ListItem, Left, Right, Body, Content } from "native-base";
import HomeDecor from '../../../assets/Home-Decor.png'
import Football from '../../../assets/Footballpic.png'
import image7 from '../../../assets/Image7.png'
import friends from '../../../assets/frieds.png'
import Dslr from '../../../assets/dslr.png'
import skullpic2 from '../../../assets/skullpic2.png'
import gradient from '../../../assets/gradient.png'
import Tshirt from '../../../assets/T-shirtpic.png'
import Path from '../../../assets/path.png'
import TshirtLogo from '../../../assets/T-shirt.png'
import Skull from '../../../assets/skull.png'
import Music from '../../../assets/music.png'
import Horse from '../../../assets/horse.png'
import HomeIcon from '../../../assets/icon.png'
import FootballLogo from '../../../assets/foot-ball.png'
import image8 from '../../../assets/Image8.png'
import DrawerIcon from  '../../../assets/sidebaricon.png'
import {ConfirmOrder} from "../../component/currentOrderModal"
import { NavigationService } from '../../services';
import {ConfirmedOrder} from '../confirmedOrder/confirmedOrder';




const { height, width, fontScale } = Dimensions.get('screen')



export default class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
          Grid: [
            {img: HomeDecor, logo: HomeIcon, title: 'Home Decor'},
            {img: Tshirt, logo: TshirtLogo, title: 'Apparel'},
            {img: Football, logo: FootballLogo, title: 'Sporting Goods'},
          ],
          GridSecond: [
            {img: Dslr, logo: Music, title: 'Electronics',backgroundColor: "rgb(42,46,67)"},
            {img: friends, logo: Horse, title: 'Toys and Games',backgroundColor: "rgb(190,194,205)"},
            {img: skullpic2, logo: Skull, title: 'Arts and Collectibles',backgroundColor: "rgba(133,146,173)"},
          ],
          Orders: true
        };
      }

     


    orderFlag = () => {
        this.setState({Orders: !this.state.Orders})
    }
      componentWillMount(){   
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        }

        componentWillUnmount(){ 
            BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
        }


        handleBackButton = () => {
        NavigationService.navigate("Guide");
        return true
        } 

        

    render() {

        return (
            <SafeAreaView style={{ height:'100%'}} >

                <View style={{height: "91%"}}>
                    {/* <View style={{ backgroundColor: 'rgb(44,46,69)', width: width, alignItems: 'center', justifyContent: 'center' }}></View> */}

                    <View style={{ backgroundColor: 'rgb(44,46,69)', width: width, height: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'white', width: width * 0.9, height: '65%', borderRadius: 10, flexDirection: 'row', top: "1%", alignItems: 'center' }}>
                            <Icon name="search" type="EvilIcons" color="#707070" style={{paddingLeft:10}} />
                            <TextInput placeholder="Search" style={{ height: 40, width: "75%",fontSize:fontScale * 16,left:15,top:1 }} placeholderTextColor="grey" />
                            <TouchableOpacity onPress={() => NavigationService.navigate("Menu54")}>

                                <Image source={Path} />
                            </TouchableOpacity>
                        </View>
                    </View>

                        

                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{position:"absolute",top : 45}}>
                            <Image source={DrawerIcon} style={{height:60,width:32}} />
                        </TouchableOpacity>
                   

       
            <View style={{height: height * 0.37}}>
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: fontScale * 28,
                    left: 30,
                    marginTop: 10,
                    color:'#454F63'
                  }}>
                  Popular Categories
                </Text>
                </View>
               
                 <View style={{height: height * 0.32}}>

                 
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '95%',
                      alignSelf: 'center',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      top: 5,
                      height: '50%',
                    }}>
                    {this.state.Grid.map((text, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={() => NavigationService.navigate("CategorySearchComponent")}
                          style={{alignItems: 'center',width:'53%'}}>
                          <Image
                            source={text.img}
                            style={{
                              backgroundColor: 'rgba(255,0,0,0.6)',
                              height: '85%',
                              width:'60%',
                              // resizeMode:'cover'
                            }}
                          />
                          <View
                            style={{
                              position: 'absolute',
                              width: '80%',
                              height: '80%',
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={text.logo}
                              style={{
                                alignSelf: 'center',
                                
                              }}
                            />
                            <Text
                              style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: fontScale * 12,
                              }}>
                              {text.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
              
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '95%',
                      alignSelf: 'center',
                      justifyContent: 'space-around',
                      height: '50%',
                      top: 0,
                    }}>
                    {this.state.GridSecond.map((text, indx) => {
                      return (
                        <TouchableOpacity
                          key={indx}
                          style={{
                            flex: 1,
                            alignItems: 'center',
                          }}>
                          <Image
                            source={text.img}
                            style={{
                              opacity: indx === 0 ? 0.9 : 0.5,
                              position: 'absolute',
                              backgroundColor: 'rgba(190,194,205)',
                              height: '85%',
                              width:'96%'
                            }}
                          />
                          <View
                            style={{
                              position: 'absolute',
                              width: '80%',
                              height: '80%',
                              justifyContent: 'center',
                            }}>
                            <Image
                              source={text.logo}
                              style={{
                                alignSelf: 'center',
                              }}
                            />
                            <Text
                              style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: fontScale * 12,
                              }}>
                              {text.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
               
                  </View>
                  </View>
            <View style={{height: height * 0.35}}>
              <View>
                <Text
                  style={{
                    textAlign: 'left',
                    fontSize: fontScale * 28,
                    left: 30,
                    color:"#454F63",
                    top: 5,
                  }}>
                  Recently Posted
                </Text>

                {/* <View> */}
                <ScrollView
                  nestedScrollEnabled={true}
                  style={{
                    borderColor: 'lightgrey',
                    borderWidth: 0.8,
                    width: '90%',
                    left: 20,
                    borderRadius: 10,
                    top: 10,
                    height: '80%',
                  }}>
                  <List>
                    <ListItem
                      style={{
                        width: '90%',
                        alignSelf: 'flex-start',
                        height: 100,
                      }}>
                      <Left style={{flex: -0.3}}>
                        <Image source={image7} style={{marginHorizontal: 10}} />
                      </Left>
                      <Body>
                        <View style={{flexDirection: 'column', width: '95%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                              Tassimo Coffee maker.
                            </Text>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                              {' '}
                              $40{' '}
                            </Text>
                          </View>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: fontScale * 11,
                              color:'#78849E'
                            }}>
                            Barely Used. 5 min ago. 20 min away
                          </Text>
                        </View>
                      </Body>

                      <Right style={{flex: 0}} />
                    </ListItem>

                    <ListItem
                      style={{
                        width: '90%',
                        alignSelf: 'flex-start',
                        height: 100,
                      }}>
                      <Left style={{flex: -0.3}}>
                        <Image source={image7} style={{marginHorizontal: 10}} />
                      </Left>
                      <Body>
                        <View style={{flexDirection: 'column', width: '95%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                             CFA 2018 Complete Set
                            </Text>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                              {' '}
                              $250{' '}
                            </Text>
                          </View>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: fontScale * 11,
                              color:'#78849E'
                              
                            }}>
                            Barely Used. 35 min ago. 15 min away
                          </Text>
                        </View>
                      </Body>

                      <Right style={{flex: 0}} />
                    </ListItem>

                    <ListItem
                      style={{
                        width: '90%',
                        alignSelf: 'flex-start',
                        height: 100,
                      }}>
                      <Left style={{flex: -0.3}}>
                        <Image source={image7} style={{marginHorizontal: 10}} />
                      </Left>
                      <Body>
                        <View style={{flexDirection: 'column', width: '95%'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                              Tassimo Coffee maker.
                            </Text>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: fontScale * 12,
                                color:'#454F63'
                              }}>
                              {' '}
                              $40{' '}
                            </Text>
                          </View>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: fontScale * 11,
                              color:'#78849E'
                            }}>
                            Barely Used. 5 min ago. 20 min away
                          </Text>
                        </View>
                      </Body>

                      <Right style={{flex: 0}} />
                    </ListItem>

                 
                  </List>
                </ScrollView>
              </View>
         
            </View>
            </View>
            {
                            this.state.Orders ?
                            <ConfirmOrder orderFunction={this.orderFlag} />
                            :
                            <ConfirmedOrder orderFunction={this.orderFlag}/>
                             }
     
      </SafeAreaView>
    );
  }
}

var styles = StyleSheet.create({});
