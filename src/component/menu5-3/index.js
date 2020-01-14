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
  YellowBox,
  StatusBar,
  Platform,
} from 'react-native';

import MaterialTabs from 'react-native-material-tabs';
import DogBox from '../../../assets/sidebardog.png';
import Items from '../../../assets/icons-pac.png';
import Previousorder from '../../../assets/order.png';
import Chat from '../../../assets/icons-comment.png';
import Contact from '../../../assets/contact.png';
import Logo from '../../../assets/Guidepic2.png';
import Profile from '../../../assets/Loic-Manzies-700px-profile.jpg';
import {NavigationService} from '../../services';
import DrawerIcon from '../../../assets/sidebaricon.png';

const {height, width, fontScale} = Dimensions.get('screen');
// import Button from 'react-native-button';

class Menu53Component extends Component {
  render() {
    console.log(height, width, fontScale);
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle="dark-content" hidden={false} />
        <View style={styles.firstView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.closeDrawer()}
            style={{position: 'absolute', zIndex: 1000, right: 5, top: -0.8,}}>
            <Image source={DrawerIcon} />
          </TouchableOpacity>
          <Image
            source={DogBox}
            style={{
              resizeMode: 'cover',
              width: '90%',
              height: '110%',
              backgroundColor: '#2a2e43',
            }}
          />
          <View style={styles.firstViewInnerLogo}>
            <Image
              source={Logo}
              style={{resizeMode: 'contain', width: '60%'}}
            />
          </View>
          <View style={styles.firstViewOuterTag}>
            <View style={styles.firstViewInnerTag}>
              <TouchableOpacity onPress={() => NavigationService.navigate("Payment3")}>

              <Image
                source={Profile}
                style={{width: '20%', height: '99%', borderRadius: 10,}}
                />
                </TouchableOpacity>
              <View style={styles.tagTextOuter}>
                <View style={styles.textTextInner}>
                  <Text style={styles.tagText}>4.5</Text>
                </View>
              </View>
            </View>
            <View style={styles.firstViewInnerTag}>
              <Text style={styles.FirstViewInnerTextName}>
                Yassine Bensaada
              </Text>
            </View>
            <View style={styles.firstViewInnerTag}>
              <Text  style={styles.FirstViewInnerTextTag}>@yassbensa</Text>
            </View>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.MenuViews}>
            <TouchableOpacity
            onPress={() => NavigationService.navigate("Menu56")}
              style={
                (styles.OpacityInnerViewText,
                {flexDirection: 'row', alignItems: 'center'})
              }>
              <Image source={Items} />
              <Text style={styles.menuListText}>{'  '}My Items on Sale</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews}>
            <TouchableOpacity onPress={() => NavigationService.navigate("PreviousOrders")} style={styles.OpacityInnerViewText}>
              <Image source={Previousorder} />
              <Text style={styles.menuListText}>{'  '}Previous Orders</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews}>
            <TouchableOpacity onPress={() => NavigationService.navigate("MessageContainer")} style={styles.OpacityInnerViewText}>
              <Image source={Chat} />
              <Text style={styles.menuListText}>{'  '}Chats</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews}>
            <TouchableOpacity style={styles.OpacityInnerViewText}>
              <Image source={Contact} style={{marginLeft: 2}} />
              <Text style={styles.menuListText}>{'   '}Contact Us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViewsBotton}>
            <TouchableOpacity
              onPress={() =>
                NavigationService.navigate('SellAnItem')
              }
              style={styles.menuButtonSell}>
              <Text style={styles.menuButtonSellText}>SELL AN ITEM</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews}>
            <TouchableOpacity >
              <Text
                style={[
                  styles.menuListTextBottom,
                  {marginTop: 20, fontSize: fontScale * 14, paddingLeft: 5},
                ]}>
                About Us
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews}>
            <TouchableOpacity style={styles.menuListText}>
              <Text
                style={[
                  styles.menuListTextBottom,
                  {marginTop: 20, fontSize: fontScale * 14, paddingLeft: 5},
                ]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuListText}>
              <Text
                style={[
                  styles.menuListTextBottom,
                  {paddingTop: 1, fontSize: fontScale * 14, paddingLeft: 5},
                ]}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.MenuViews} />
        </View>
      </SafeAreaView>
    );
  }
}
export default Menu53Component;

const styles = StyleSheet.create({
  mainContainer: {
    flex: Platform.OS === 'ios' ? 0.85 : 0.88,
    marginTop: Platform.OS === 'ios' ? 86 : 45,

  },
  firstView: {
    flex: 0.5,
    zIndex: 10,
  },
  firstViewInnerLogo: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    right: 15,
    top: 0,
    width: width / 2,
  },
  firstViewOuterTag: {
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 58,
    // backgroundColor:'yellow',
  },
  firstViewInnerTag: {
    width: '80%',
    // backgroundColor:'yellow',
  
  },
  tagTextOuter: {
    position: 'absolute',
    width: '20%',
    bottom: 3,
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
    height: 14,
  },
  textTextInner: {
    backgroundColor: '#2a2e43',
    width: '31%',
    height: '100%',
    borderRadius: 15,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  tagText: {
    // backgroundColor: 'red',
    fontSize: fontScale * 8,
    textAlign: 'right',
    color: 'white',
    right: 2,
  },
  FirstViewInnerTextTag: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: fontScale * 14,
  },
  FirstViewInnerTextName: {
    color: 'white',
    fontWeight: '700',
    fontSize: fontScale * 22,
  },
  secondView: {
    flex: 1,
    backgroundColor: '#2a2e43',
    alignItems: 'center',
    width: '90%',
    zIndex: 50,
    borderBottomEndRadius: 15,
  },
  menuListText: {
    color: 'white',
    fontSize: fontScale * 16,

  },
  menuListTextBottom: {
    color: '#707070',
    fontSize: fontScale * 16,
  },
  menuButtonSell: {
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonSellText: {
    color: '#FF3100',
    fontWeight: 'bold',

    fontSize: fontScale * 18,
  },
  MenuViews: {
    flex: 0.11,
    width: '80%',
    marginTop:15,
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  MenuViewsBotton: {
    flex: 0.18,
    top: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  OpacityInnerViewText: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'yellow'
  },
});
