import React, { Component } from 'react'
import {View, Image, TextInput, Dimensions, Text,ScrollView, TouchableOpacity,SafeAreaView,StatusBar,BackHandler,StyleSheet,Keyboard} from 'react-native'
import {Icon} from "native-base"
import Path from '../../../assets/path.png'
import image7 from '../../../assets/Image14.png'
import image8 from '../../../assets/Image14.png'
import { NavigationService } from '../../services'
import DrawerIcon from  '../../../assets/sidebaricon.png'
import { ConfirmOrder } from '../currentOrderModal'
import {ConfirmedOrder} from '../confirmedOrder/confirmedOrder';
import { RadioButton } from 'react-native-paper'



const {height, width, fontScale} = Dimensions.get('screen');

export default class Menu54 extends Component {
  constructor(){
    super();
    this.state = {
      Orders:true,
      sortBy: false,
      checked: 'first'
    }
  }


  
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
    orderFlag = () => {
      this.setState({Orders: !this.state.Orders})
  }


  render() {
    const { checked } = this.state;
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{height: '100%'}}>
          {/* <KeyboardAvoidingView enabled={false}> */}
          <StatusBar barStyle="light-content" hidden={false} />

          {
            this.state.sortBy ?
            <View style={[{width:"89.4%", backgroundColor:'white',zIndex:50,position:'absolute',borderRightColor:'lightgrey',
            borderLeftColor:'lightgrey',borderBottomColor:'lightgrey',borderRightWidth:0.5,borderLeftWidth:0.5,borderBottomWidth:0.5,
            borderBottomLeftRadius:10,borderBottomRightRadius:10,height:height*0.32,alignItems:'center',left:20,marginTop:75},styles.shadows]}>
              <View style={{marginVertical:10}}>
                <Text style={{color:'#E12E09',textAlign:'center',fontSize:fontScale*20}}>
                  Sort By
                </Text>
              </View>
               <View style={{flexDirection:'column'}}>
                   <View style={[styles.sortBy]}>
                     <Text style={{color:'#79859F',top:5,left:5,height:25}}>Most Recent</Text>
                     <RadioButton
                     value={'first'}
                     status={checked === 'first' ? 'checked':'unchecked'}
                     onPress={() => this.setState({ checked : 'first'})}
                     color="#00BE6D"
                     />
                   </View>
                   <View style={styles.sortBy}>
                     <Text style={{color:'#79859F',top:5,left:5,height:25}}>Lowest Price</Text>
                     <RadioButton
                     value={'second'}
                     status={checked === 'second' ? 'checked':'unchecked'}
                     onPress={() => this.setState({ checked : 'second'})}
                     color="#00BE6D"
                     />
                   </View>
                   <View style={styles.sortBy}>
                     <Text style={{color:'#79859F',top:5,left:5,height:25}}>Highest Price</Text>
                     <RadioButton
                     value={'third'}
                     status={checked === 'third' ? 'checked':'unchecked'}
                     onPress={() => this.setState({ checked : 'third'})}
                     color="#00BE6D"
                     />
                   </View>
                   <View style={styles.sortBy}>
                     <Text style={{color:'#79859F',top:5,left:5,height:25}}>Highest Seller Rating</Text>
                     <RadioButton
                     value={'fourth'}
                     status={checked === 'fourth' ? 'checked':'unchecked'}
                     onPress={() => this.setState({ checked : 'fourth'})}
                     color="#00BE6D"
                     />
                   </View>
               </View>
            </View>
            :null
          }

          <View
            style={{
              backgroundColor: 'rgb(44,46,69)',
              width: width,
              height: height * 0.14,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 0,
            }}>
            <View
              style={
                {
                backgroundColor: 'white',
                // width: width * 0.9,
                borderRadius: 10,
                padding: 10,
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
              }
              }>
              <Icon name="search" type="EvilIcons" color="#707070" />
              <TextInput
                placeholder="Fawsin Calculus"
                placeholderTextColor="#78849E"
                style={{height: 50, width: width * 0.7, borderRadius: 10,left:5,fontSize:fontScale*16,zIndex:100}}/>
            <TouchableOpacity onPress={() => {this.setState({sortBy: !this.state.sortBy}),Keyboard.dismiss()}}>
              <Image source={Path}/>
            </TouchableOpacity>
            </View>
          </View>

        

          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={{position: 'absolute', top: 50, zIndex: 100,elevation:1}}>
            <Image
              source={DrawerIcon}
              style={{height: 60, width: 32, zIndex: 100}}
            />

         
         
          </TouchableOpacity>
         
          <ScrollView
              showsVerticalScrollIndicator={false}
              style={{height: '93%'}}>
          <View style={{height: '15%'}}>
            <View style={{width: '70%'}}>
              <Text
                style={{
                  fontSize: fontScale * 30,
                  left: 20,
                  top: 20,
                  color: '#454F63',
                }}>
                Search results for "Fawsin Calculus"
              </Text>
            </View>
          </View>
          <View
            style={{
           
              paddingTop:20,
              height: '61%',
              borderRadius: 14,
            }}>
              <View style={{
                  borderColor: 'lightgrey',
                  borderWidth: 0.2,
                  marginHorizontal: 20,
              }}>
          
              <TouchableOpacity
              onPress={() => NavigationService.navigate('MessageSell3Component', { modalVis: false})} 
               >
                <View style={{flexDirection: 'row', left: 10, top: 10}}>
                  <Image source={image7} style={{marginHorizontal: 10}} />
                  <View style={{flexDirection: 'column'}}>
                    <View style={{width: '100%', flexDirection: 'row'}}>
                      <Text style={{width: '70%',color:'#454F63'}}>
                        Brand New Fawsin Textbook
                      </Text>
                      <Text style={{width: '15%', textAlign: 'right',color:'#454F63'}}>
                        $60
                      </Text>
                    </View>
                    <Text style={{color: '#78849E'}}>
                      Barely Used. 20 min away
                    </Text>
                    <Text style={{color: '#78849E'}}>Added &middot; 1h ago</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              />
              <View style={{flexDirection: 'row', left: 10}}>
                <Image source={image8} style={{marginHorizontal: 10}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: '100%', flexDirection: 'row'}}>
                    <Text style={{width: '70%',color:'#454F63'}}>
                      Calculus Fawsin 2016 edition
                    </Text>
                    <Text style={{width: '15%', textAlign: 'right',color:'#454F63'}}>$50</Text>
                  </View>
                  <Text style={{color: '#78849E'}}>
                    Barely Used. 35 min away
                  </Text>
                  <Text style={{color: '#78849E'}}>Added &middot; 1h ago</Text>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              />
              <View style={{flexDirection: 'row', left: 10}}>
                <Image source={image8} style={{marginHorizontal: 10}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: '100%', flexDirection: 'row'}}>
                    <Text style={{width: '70%',color:'#454F63'}}>Fawsin Calculus Textbook</Text>
                    <Text style={{width: '15%', textAlign: 'right',color:'#454F63'}}>$45</Text>
                  </View>
                  <Text style={{color: '#78849E'}}>
                    Barely Used. 35 min away
                  </Text>
                  <Text style={{color: '#78849E'}}>Added &middot; 1h ago</Text>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              />
              <View style={{flexDirection: 'row', left: 10}}>
                <Image source={image8} style={{marginHorizontal: 10}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: '100%', flexDirection: 'row'}}>
                    <Text style={{width: '70%',color:'#454F63'}}>
                      Calculus Fawsin 2018 edition
                    </Text>
                    <Text style={{width: '15%', textAlign: 'right',color:'#454F63'}}>$70</Text>
                  </View>
                  <Text style={{color: '#78849E'}}>
                    Barely Used. 5 min away
                  </Text>
                  <Text style={{color: '#78849E'}}>Added &middot; 1h ago</Text>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              />
              <View style={{flexDirection: 'row', left: 10}}>
                <Image source={image8} style={{marginHorizontal: 10}} />
                <View style={{flexDirection: 'column'}}>
                  <View style={{width: '100%', flexDirection: 'row'}}>
                    <Text style={{width: '70%',color:'#454F63'}}>
                      Calculus Fawsin 2016 edition
                    </Text>
                    <Text style={{width: '15%', textAlign: 'right',color:'#454F63'}}>$50</Text>
                  </View>
                  <Text style={{color: '#78849E'}}>
                    Barely Used. 15 min away
                  </Text>
                  <Text style={{color: '#78849E'}}>Added &middot; 1h ago</Text>
                </View>
              </View>
              <View
                style={{
                  borderTopColor: 'lightgrey',
                  borderTopWidth: 1,
                  marginHorizontal: 10,
                  marginVertical: 20,
                }}
              />
              
          </View>
          </View>
            </ScrollView>
          {/* </KeyboardAvoidingView> */}
          {
                            this.state.Orders ?
                            <ConfirmOrder orderFunction={this.orderFlag} />
                            :
                            <ConfirmedOrder orderFunction={this.orderFlag}/>
                             }
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sortBy:{
    flexDirection:'row',
    borderColor:'grey',
    borderRadius:10,
    width:width*0.85,
    borderWidth:0,
    height:40,
    justifyContent:'space-between',
    marginVertical:5,
    marginHorizontal:10,
    alignItems:'center'
  },
  shadows:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,

elevation: 1,
  }
})