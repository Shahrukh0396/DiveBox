/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler,
  ScrollView,
  Platform,
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
import BooksImage from '../../../assets/wallpaper.png';
import Share from '../../../assets/ico.png';
import StarRating from 'react-native-star-rating';
import Gradiant from '../../../assets/gradientbig.png';
import Chat from '../../../assets/icons-comment-dark.png';

import {NavigationService} from '../../services';
const {height, width, fontScale} = Dimensions.get('screen');

class ProductReview extends Component {
    constructor(){
        super();
        this.state = {
            starCount1: 4,
            Reviews: [
                {image: Profile, Name: 'Julia', Rating: 4.5, Desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
                {image: Profile, Name: 'Julia', Rating: 4.5, Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {image: Profile, Name: 'Julia', Rating: 4.5, Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                {image: Profile, Name: 'Julia', Rating: 4.5, Desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            ]
        }
    }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.MenuOuterFirstView}>
          <View style={{flex: 1}}>
            <Image
              source={BooksImage}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            
            }}>
            <Image
              source={Profile}
              style={{
                width: 150,
                height: 150,
                borderRadius: 80,
                borderWidth: 15,
                borderColor: 'white',
              
              }}
            />
          </View>
          <View style={{flex: 1}}>
              <View style={{top: 10, flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10}}>
                
                <View style={{width: '25%', alignItems: "center"}}>
                <Image source={Chat} />
                <Text style={{textAlign: "center",fontSize:fontScale*12,marginTop:5}}>
                    CONTACT SELLER
                </Text>
                </View>
                <View style={{width: '25%', alignItems: "center"}}>
                <Image source={Share} />
                <Text style={{textAlign: "center",fontSize:fontScale*12,marginTop:5}}>
                    REPORT
                </Text>
                </View>
              </View>
              <View style={{alignItems: "center"}}>
                  <Text style={{textAlign: "center", fontSize: fontScale* 20, fontWeight: "bold",paddingTop:15}}>
                      Marie
                  </Text>
                    <View style={{width: '30%'}}>

                  <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={20}
                  fullStarColor="orange"
                  emptyStarColor="#707070"
                  rating={this.state.starCount1}
                  selectedStar={rating => this.onStarRatingPress1(rating)}
                  />
                  </View>
                  <Text style={{top:2}} note>
                      4.7 stars
                  </Text>
              <View style={{top: 15}}>
                  <Text style={{textAlign: "center", fontSize: fontScale*20}}>
                      PRODUCT REVIEWS
                  </Text>
              </View>
              </View>
              </View>
              <Image source={Gradiant} style={{width: '100%'}} />
        </View>
        <View style={{flex: 1, backgroundColor: '#f7f7fa', alignItems: "center"}} >
            <ScrollView>

                {
                    this.state.Reviews.map((text, index) => {
                        return(
                            <View style={{margin: 5, flexDirection: "row", backgroundColor: 'white', width: '92%', borderRadius: 20, padding: 15,marginLeft:10}}>
                                
                            <View style={{justifyContent: "flex-start"}}>
                                <Image source={text.image} style={{borderRadius: 50, borderWidth: 1, borderColor: 'black'}} />
                            </View>
                            <View style={{left: 15}}>


                            <Text style={{fontWeight: "bold", fontSize: fontScale*16}}>
                                {text.Name}
                            </Text>
                            <View style={{width: '18%', top: 0}}>

                            <StarRating
                            disabled={false}
                            maxStars={5}
                            starSize={10}
                            fullStarColor="orange"
                            emptyStarColor="#707070"
                            rating={text.Rating}
                            selectedStar={rating => this.onStarRatingPress1(rating)}
                            />
                            </View>
                            <View style={{width: '90%'}}>

                            <Text style={{fontSize:fontScale*12}}>
                                {
                                    text.Desc
                                }
                            </Text>
                            </View>
                            </View>
                           
                </View>
                        )
                    })
                }
        </ScrollView>
        </View>
       
        <View style={styles.HeaderAbsolute}>
          <Header style={styles.MainHeader}>
            <Left>
              <TouchableOpacity onPress={() => NavigationService.navigate("Menu56")}>
                <Icon
                  type="AntDesign"
                  name="arrowleft"
                  style={{color: 'white'}}
                />
              </TouchableOpacity>
            </Left>
            <Body />
            <Right>
              <Icon type="FontAwesome5" name="edit" style={{color: 'white'}} />
            </Right>
          </Header>
        </View>
      </View>
    );
  }
}

export default ProductReview;

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
    flex: Platform.OS === "ios" ? 0.8 : 1.4,
    // backgroundColor: '#e53a19',
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
    color: '#282F39',
    height: 23,
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
