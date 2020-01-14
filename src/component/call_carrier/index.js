import React, { Component } from "react";
import { ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ImageBackground,Image ,TextInput,BackHandler} from "react-native";
import { View, Text, Left, Body, Header, Right, Icon, Title } from "native-base";
import MapImage from "../../../assets/mapimage.jpeg";
import Ryan from "../../../assets/ryan.png";
import Yassin from "../../../assets/yassine.png"
import StarRating from 'react-native-star-rating';
import Audi from "../../../assets/audi.png";
import Road from "../../../assets/road.png";
import Start from "../../../assets/star.png";
import CarLogo from "../../../assets/carlogo.png"
import Upload from "../../../assets/upload.png";
import PhoneCall from "../../../assets/phonecall.png"
import { NavigationService } from "../../services";
 const { height, fontScale } = Dimensions.get("screen")

class CallCarrier extends Component {
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
  
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
  
      handleBackButton = () => {
        NavigationService.navigate('Main');
        return true;
      };
    render() {
        return (
            <SafeAreaView>
                <View style={{ flex: 1 }}>

                    <View style={styles.header}>
                        <Left style={{ flex: 0.3, marginBottom: '5%' }}>
                            <TouchableOpacity onPress={() =>  NavigationService.navigate('Main')}>

                                <Icon type="AntDesign" name="arrowleft" style={{ color: "white", marginLeft: 20 }} />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{ justifyContent: 'flex-end', marginTop: 20 }} >
                            <Text style={{ color: 'white', fontSize: fontScale * 28, textAlignVertical: "bottom" }}>
                                Carrier
                                 </Text>
                        </Body>
                        <Right style={{ flex: 0.3 }}></Right>
                    </View>
                    <ImageBackground source={MapImage} style={{ height: height * 0.9 }}>
                        
                                <View style={styles.viewContainer}>
                                            <View style={{height:"50%"}}>
                                                    <View style={{height:'70%',flexDirection:'row'}}>
                                                                <View style={{width:'50%',height:170}}>

                                                                            <View style={styles.ryan}>
                                                                                <Image source={Ryan} />
                                                                                <View>
                                                                                    <Text style={{fontSize:13,height:20,color:'#2A2E43'}}>Ryan</Text>
                                                                                    <Text style={{fontSize:12,height:18}} note>Carrier</Text>
                                                                                </View>
                                                                            </View>

                                                                            <View style={{height:70,paddingLeft:18}}>
                                                                                    <Icon  type='Entypo' name="dot-single" style={{color:'#2A2E43'}} />
                                                                                    <Icon  type='Entypo' style={{fontSize:fontScale * 18,color:'#2A2E43',paddingLeft:5}}
                                                                                     name="dots-three-vertical" />

                                                                                    <Icon  type='Entypo' name="dot-single" style={{color:'#2A2E43'}} />


                                                                            </View>
                                                                            <View style={styles.yasin}>
                                                                                <Image source={Yassin} />
                                                                                <View>
                                                                                
                                                                                    <Text style={{fontSize:13,height:20,color:'#2A2E43'}}>Yassine</Text>

                                                                                    <Text style={{fontSize:12,height:18}} note>Buyer</Text>

                                                                                </View>
                                                                            </View>
                                                                </View>
                                                                <View style={{width:'50%',paddingTop:10}}>

                                                                            <View style={styles.audiStyles}>
                                                                                   <Icon name="ios-car" type="Ionicons" style={{color:'grey',fontSize:fontScale*40}} />
                                                                                   <Text style={{paddingLeft:10}} note>Audi - Q7</Text>
                                                                            </View>
                                                                            <View>
                                                                                <Text style={styles.modalNumber}>SZZ-654</Text>
                                                                            </View>
                                                                            <View style={{flexDirection:'row',justifyContent:'flex-end',width:'90%'}}>

                                                                                <Text style={{paddingRight:7}} note>4.7 Ratings</Text>
                                                                                  <StarRating
                                                                                        disabled={false}
                                                                                        maxStars={1}
                                                                                        rating={1}
                                                                                        starSize={20}
                                                                                        fullStarColor="#FFB900"
                                                                                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                                                    />
                                                                            </View>
                                                                            <View style={{flexDirection:'row',justifyContent:'center',top:15,height:40}}>
                                                                                  <Image source={Road} style={{height:35,width:45}} />
                                                                                  <View >
                                                                                      <Text style={{fontSize:fontScale*13}}>20 Minutes</Text>
                                                                                      <Text style={{textAlign:'center',fontSize:fontScale*13}}>Away</Text>
                                                                                  </View>
                                                                            </View>
                                                                </View>
                                                    </View>
                                                    <View style={{height:'30%'}}>
                                                                <TouchableOpacity style={styles.callbutton}>
                                                                                <Text style={styles.callText}>Call</Text>
                                                                </TouchableOpacity>
                                                    </View>
                                            </View>

                                            <View style={{height:"50%"}}>
                                                    <View style={styles.secondContainer}>
                                                        <View style={styles.firstViewSecondContainer}>
                                                                <Image  source={Ryan} style={{borderRadius:25,height:20,width:20,zIndex:10}} />
                                                                <Image source={CarLogo} style={{position:'absolute',zIndex:0,top:1,left:5}} />
                                                        </View>
                                                        <View style={styles.secondViewSecondContainer}>
                                                            <TextInput style={{height:40,paddingLeft:15}} placeholder="Send Message" />
                                                        </View>
                                                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30,width:'13%'}}>
                                                            <Image source={Upload} />
                                                            <Image source={PhoneCall} />
                                                        </View>
                                                    </View>
                                                    <View style={{height:'25%',borderTopWidth:1,borderColor:'#707070',flexDirection:'row',justifyContent:'space-between'}}>
                                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                                <Icon name="location-on" type='MaterialIcons' style={{color:'#707070',fontSize:fontScale*25}} />
                                                                <Text style={{paddingLeft:10,color:'#707070'}}>25th street, Canada</Text>
                                                            </View>
                                                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                                                <Text style={{textAlignVertical:'center',paddingRight:10,fontSize:fontScale*12,color:'#3ACCE1'}}>
                                                                    Change
                                                                </Text>
                                                            </View>
                                                    </View>
                                                    <View style={{height:'50%',borderTopWidth:1,borderColor:'#707070'}}>
                                                                <View style={{flexDirection:'row',justifyContent:'flex-start',width:'95%',alignSelf:'center'}}>
                                                                    <Icon name="dollar" type="FontAwesome" style={{color:'#707070',fontSize:fontScale*25,paddingTop:10}} />
                                                                    <Text style={{color:'#707070',paddingLeft:10,paddingTop:10}}> 51.53 </Text>
                                                                </View>

                                                                <TouchableOpacity style={styles.cancelButton}>
                                                                    <Text style={{color:'#707070',textAlign:"center"}}>Cancel</Text>
                                                                </TouchableOpacity>
                                                    </View>
                                            </View>
                                </View>
                   
                    </ ImageBackground>

                </View>

            </SafeAreaView>
        )
    }
}


export default CallCarrier



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2A2E43',
        alignItems: 'flex-start',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    viewContainer:{
        backgroundColor:'white',
        height:470,
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:30,

    },
    ryan:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',
        paddingLeft:10,
        paddingTop:10
    },
    yasin:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',
        paddingLeft:10,
        paddingTop:10
    },
    audiStyles:{
        flexDirection:'row',
        alignItems:"center",
        width:'70%',
        alignSelf:'flex-end'
    },
    modalNumber:{
        color:"#2A2E43",
        fontSize:fontScale*30,
        textAlign:"right",
        width:'87%'
    },
    callbutton:{backgroundColor:'#FF3100',height:42,borderRadius:25,width:"82%",alignSelf:'center',marginTop:20,justifyContent:'center'},
    callText:{color:'white',textAlign:'center',textAlignVertical:'center',fontSize:fontScale*18},
    secondContainer:{height:'25%',borderTopWidth:1,borderColor:"#707070",justifyContent:'space-evenly',flexDirection:'row',paddingTop:15},
    firstViewSecondContainer:{height:35,flexDirection:"row",alignItems:'center',width:'11%'},
    secondViewSecondContainer:{width:"70%",height:30,justifyContent:'center',borderWidth:1,borderColor:'grey',borderRadius:15},
    cancelButton:{backgroundColor:'#E9EBEF',height:42,borderRadius:25,width:"90%",alignSelf:'center',marginTop:12,justifyContent:'center'},

})