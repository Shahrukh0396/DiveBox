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
  ScrollView,
  BackHandler
} from 'react-native';

import MaterialTabs from 'react-native-material-tabs';
const {height, width, fontScale} = Dimensions.get('screen');
// import Button from 'react-native-button';
import TabBar from '../../../assets/Diveboxasset/Diveboxasset/gradient.png';
import Pagination from '../../../assets/image_2019_12_30T12_24_45_427Z.png';
import Chat from '../../../assets/icons-comment-dark.png';
import Shate from '../../../assets/ico.png';
import Profile1 from '../../../assets/avatar.png';
import Profile from '../../../assets/Image14.png';

import LogoNav from '../../../assets/icons-search.png';
import LogoMain from '../../../assets/splashlogo.png';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Icon, Header, Left, Body, Right, Title, List,ListItem} from 'native-base';
import {NavigationService} from '../../services';
import ModalComponent from '../Modal/modal';
import { ConfirmOrder } from '../currentOrderModal';
import {ConfirmedOrder} from '../confirmedOrder/confirmedOrder';
import HomeButton from '../homeButton/homeButton';

class MessageSell3Component extends Component {
  state = {
    selectedTab: 0,
    Email: '',
    Password: '',
    SignUpName: '',
    SignUpPassword: '',
    SignUpEmail: '',
    modalVis: false,
    Orders : true

  };
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
  setTab(tab) {
    this.setState({selectedTab: tab});
  }

  componentDidMount(){

    if(this.props.navigation.state.params.modalVis){

      this.setState({
        modalVis: this.props.navigation.state.params.modalVis
      })
    }else{
      this.setState({modalVis: false})
    }
  }


  componentWillMount(){   
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){ 
        BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
    }


    handleBackButton = () => {
    NavigationService.navigate("Menu54");
    return true
    } 

    orderFlag = () => {
      this.setState({Orders: !this.state.Orders})
  }
  render() {
    const { navigation } = this.props;
    console.log(width, height, this.state.selectedTab, this.state.Email);
   
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={{flex: 0.9, backgroundColor: 'white'}}>
            <View
              style={{
                flex: 0.8,
                // height: '40%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{justifyContent: 'flex-end', left: 10}}>
                <TouchableOpacity onPress={() => NavigationService.navigate("Menu54")}>
                  <Icon type="AntDesign" name="arrowleft" />
                </TouchableOpacity>
              </View>
              {/* <TouchableOpacity onPress={() => NavigationService.navigate("Main")}> */}
              <TouchableOpacity
              onPress={() => NavigationService.navigate("Main")}
                style={{
                 
                  width: '20%',
                 
                  borderRadius: 10,
                }}>

                <HomeButton />
              </TouchableOpacity>
                  {/* </TouchableOpacity> */}
              <View style={{justifyContent: 'flex-end', right: 10}}>
                <TouchableOpacity>
                  <Image source={LogoNav} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1.6}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: fontScale * 24, left: 20,color:'#454F63',top:5}}>
                  Fawsin Calculus Textbook
                </Text>
              </View>
              <View style={{flex: 1.2}}>
                <MaterialTabs
                  items={['PRODUCT DESCRIPTION', 'SELLER DESCRIPTION']}
                  selectedIndex={this.state.selectedTab}
                  onChange={this.setTab.bind(this)}
                  barColor="white"
                  activeTextColor="black"
                  textStyle={{
                   
                    color: 'black',
                    fontSize: fontScale * 12,
                  }}
                />
              </View>
              <View
                style={{
                  // flex: 0,
                  // backgroundColor: 'red',
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
                        // backgroundColor:'red'
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
          {this.state.selectedTab === 0 && (
            <View
              style={{
                flex: 3.5,
                alignItems: 'center',
                // height: '48%',
                backgroundColor: 'white',
                justifyContent: 'flex-end',
              }}
            >
              <ScrollView contentContainerStyle={{height:height}}>
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 0.2,
                  backgroundColor: 'white',
                  shadowColor:'lightgrey',
                  shadowOpacity:0.8,
                  shadowRadius:10,
                  shadowOffset:{width:2,height:10},
                  // height: height/2.8,
                  height: 320,
                  marginHorizontal: 15,
                  borderRadius: 13,
                  top: 20
                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', }}>
                  <View
                    style={{
                      // backgroundColor: 'red',
                      top: 18,
                      width: '20%',
                    }}>
                    <TouchableOpacity onPress={() => NavigationService.navigate("MessageScrolled1")} style={{ alignItems: 'center' }}>
                      <Image source={Chat} />
                      <Text style={{ flexWrap: 'wrap', textAlign: 'center' ,color:'#2A2E43',fontSize:12}}>
                        CONTACT SELLER
                    </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ top: 20 }}>
                    <Image source={Profile} />
                  </View>
                  <View
                    style={{
                      //   backgroundColor: 'red',
                      top: 24,
                      width: '20%',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                      <Image source={Shate} />
                      <Text style={{ flexWrap: 'wrap', textAlign: 'center',color:'#2A2E43',fontSize:12 }}>
                      REPORT
                    </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ marginVertical: 20,top:5 ,height:25 }}>
                  <Text style={{ textAlign: 'center', fontSize: fontScale * 20, fontWeight: 'bold', color: 'rgb(44,46,69)' }}>
                    Fawsin Calculus Textbook
                  </Text>
                </View>
                <View>
                  <Text style={{ textAlign: 'center', fontSize: fontScale * 16, color: '#454F63' }}>PRICE: $45</Text>
                  <Text style={{ textAlign: 'center', fontSize: fontScale * 16, color: '#454F63' }}>15 min away</Text>
                </View>
                <View style={{ marginHorizontal: 50,top:10 }}>
                  <Text style={{ textAlign: 'center',fontSize:12,color:'#454F63' }}>
                    Barely used textbook great for anyone taking introductory calculus classes. Used for MATH0256 @ UoiT
                  </Text>
                </View>
                <View style={{ top: 30 }}>
                  <TouchableOpacity onPress={() => NavigationService.navigate("ConfrimPickup")} style={styles.continueOpacity}>
                    <Text style={{ textAlign: 'center', fontSize: fontScale * 20, fontWeight: '600', color: 'white', margin: 12 }}>
                      BUY NOW
                    </Text>
                  </TouchableOpacity>
                  {
                    this.state.modalVis ?
                      <ModalComponent
                        visible={this.state.modalVis}
                        buttonText={"Confirm Order"}
                        handleButton={() => this.setState({ modalVis: false })}
                      />
                      : null
                  }
                  
                </View>
              </View>
              <View style={{ height: '10%', justifyContent: 'flex-end',marginHorizontal:20 }}><Text style={{ fontSize: fontScale * 25,color:'#454F63' }}>Similar Products</Text></View>
              <View style={{ borderWidth: 1, borderRadius: 12, borderColor: 'lightgrey', marginHorizontal: 20, top: 10, backgroundColor: 'white', height: 300 }}>
                <ScrollView nestedScrollEnabled={true} style={{height:height*0.3}}>
                <List>
                  
                  <ListItem style={{ width: '90%', alignSelf: "flex-start", height: 100 }}>
                    <Left style={{ flex: -0.3 }}>
                      <Image source={Profile} style={{ marginHorizontal: 10 }} />
                    </Left>
                    <Body >
                      <View style={{ flexDirection: 'column', width: '95%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 ,color:'#454F63'}}>
                            Tassimo Coffee maker.
                          </Text>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 , color:'#504235' }}> $40 </Text>
                        </View>
                        <Text style={{ textAlign: "left", fontSize: fontScale * 11 ,color:'#78849E'}}>
                          Barely Used. 5 min ago. 20 min away
                        </Text>
                      </View>
                    </Body>
                    <Right style={{ flex: 0 }} />
                  </ListItem>
                  <ListItem style={{ width: '90%', alignSelf: "flex-start", height: 100 }}>
                    <Left style={{ flex: -0.3 }}>
                      <Image source={Profile} style={{ marginHorizontal: 10 }} />
                    </Left>
                    <Body >
                      <View style={{ flexDirection: 'column', width: '95%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 ,color:'#454F63'}}>
                            Tassimo Coffee maker.
                          </Text>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 , color:'#504235' }}> $40 </Text>
                        </View>
                        <Text style={{ textAlign: "left", fontSize: fontScale * 11 ,color:'#78849E'}}>
                          Barely Used. 5 min ago. 20 min away
                        </Text>
                      </View>
                    </Body>
                    <Right style={{ flex: 0 }} />
                  </ListItem>
                  <ListItem style={{ width: '90%', alignSelf: "flex-start", height: 100 }}>
                    <Left style={{ flex: -0.3 }}>
                      <Image source={Profile} style={{ marginHorizontal: 10 }} />
                    </Left>
                    <Body >
                      <View style={{ flexDirection: 'column', width: '95%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 ,color:'#454F63'}}>
                            Tassimo Coffee maker.
                          </Text>
                          <Text style={{ textAlign: "left", fontSize: fontScale * 12 , color:'#504235' }}> $40 </Text>
                        </View>
                        <Text style={{ textAlign: "left", fontSize: fontScale * 11 ,color:'#78849E'}}>
                          Barely Used. 5 min ago. 20 min away
                        </Text>
                      </View>
                    </Body>
                    <Right style={{ flex: 0 }} />
                  </ListItem>
                </List>
                </ScrollView>
              </View>
            </ScrollView>
            </View>
          )}
          {this.state.selectedTab === 1 && (
            <View style={{flex: 3.5}}>
              <View
                style={{
                  flex: 0.7,
                  margin: '2%',
                  borderWidth: 0.5,
                  backgroundColor: 'white',
                  borderColor: 'lightgray',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      //   backgroundColor: 'red',
                      width: '20%',
                    }}>
                    <TouchableOpacity onPress={() => NavigationService.navigate("MessageScrolled1")} style={{alignItems: 'center'}}>
                      <Image source={Chat} />
                      <Text style={{flexWrap: 'wrap', textAlign: 'center',color:'#2A2E43'}}>
                        Contact Seller
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <Image source={Profile1} />
                  </View>
                  <View
                    style={{
                      //   backgroundColor: 'red',
                      width: '20%',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={{alignItems: 'center'}}>
                      <Image source={Shate} />
                      <Text style={{flexWrap: 'wrap', textAlign: 'center',color:'#2A2E43'}}>
                        Report
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 2, justifyContent: 'space-around'}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: fontScale * 24,
                      fontWeight: 'bold',
                      color:'#2A2E43'
                    }}>
                    Marie
                  </Text>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Rating
                      type="star"
                      ratingCount={5}
                      imageSize={30}
                      // showRating
                      onFinishRating={this.ratingCompleted}
                    />
                    <Text
                      style={{fontSize: fontScale * 20, fontWeight: 'bold'}}>
                      {'  '}(12)
                    </Text>
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: fontScale * 16,
                      color:'#454F63',
                      top:5
                    }}>
                    15 min away
                  </Text>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: fontScale * 16,
                        width: '80%',
                        color:'#454F63',
                        top:5
                      }}>
                      Nothing beats the feeling of getting a good deal! :)
                    </Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: fontScale * 16,
                        width: '80%',
                        color:'#454F63',
                        top:10
                      }}>
                      Feel Free to reach out on Divebox or Call/text me at
                      123-456-7890
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}>
                    <TouchableOpacity onPress={() => NavigationService.navigate("ConfrimPickup")} style={styles.continueOpacity}>
                    <Text style={{ textAlign: 'center', fontSize: fontScale * 20, fontWeight: '600', color: 'white', margin: 12 }}>
                      BUY NOW
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

                            {
                            this.state.Orders ?
                            <ConfirmOrder orderFunction={this.orderFlag} />
                            :
                            <ConfirmedOrder  orderFunction={this.orderFlag}/>
                             }
        </View>
      </SafeAreaView>
    );
  }
}
export default MessageSell3Component;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1.5,
    top: '2%',
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
  continueOpacity: {
    backgroundColor: '#FF3100',
    borderRadius: 10,
    alignSelf: 'center',
    width: '50%',
  },
});