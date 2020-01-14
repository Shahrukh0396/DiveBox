import React, { Component } from "react";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer"

import SplashScreenComponent from "../component/splashscreen"
import {NavigationService} from "../services"
import AuthContainer from "../container/login&signup";
import Guide from "../component/guide/guide";
import CreateProfileComponent from "../component/createprofile";
import MessageContainer from "../container/message"
import Menu53Component from "../component/menu5-3";
import MessageSell3Component from "../component/messagesell-3";
import Home from '../component/home'
import Dashboard from "../component/dashboard/dashboard";
import Menu54 from "../component/menu5-4";
import ConfrimPickup from "../component/confirmPickup";
import { Dimensions, StyleSheet,View, Text,TouchableOpacity,Image} from "react-native";
import DrawerIcon from  '../../assets/sidebaricon.png'
import SellAnItem from "../component/sell";
import Payment3 from "../component/payments/payment3";
import Menu56 from "../component/menu5-6";
import Payment2 from "../component/payments/payment-2";
import Payment from "../component/payments/payment-1";
import MessageScrolled1 from "../component/messagescrolled1";
import OrderOnTheWay from "../component/orderOnTheWay";
import ChangePasswordComponent from "../component/changepassword";
import EditProfile from "../component/editprofile";
import ForgetPassword from "../component/forgetPassword/forgetPassword";
import CallCarrier from "../component/call_carrier";
import CategorySearchComponent from "../component/categorysearch";
import ProductReview from "../component/productreview";
import PreviousOrders from "../component/PreviousOrder";
const {height,width,fontScale} = Dimensions.get("screen")

const Container = createStackNavigator({
  CallCarrier,
  OrderOnTheWay,
  MessageScrolled1,
  Payment,
  Payment2,
  Payment3,
  AuthContainer,
  SplashScreenComponent,
  Guide,
  ChangePasswordComponent,
  EditProfile,
  // Menu54,
  CreateProfileComponent,
  Menu53Component,
  ForgetPassword,
  MessageSell3Component,
  MessageContainer,
  Dashboard,
  SellAnItem,
   ConfrimPickup,
  ProductReview,
  
  },
  {
    defaultNavigationOptions: navigation => ({
      header: null,
    }),
  },
);


const DrawerScreens = createDrawerNavigator(
  {

  
  // Guide,
  // CreateProfileComponent,
  // Menu53Component,
  // MessageSell3Component,
  // MessageContainer,
  Main :  Dashboard,
 
  Menu54:  Menu54,
  Menu56:  Menu56,
  CategorySearchComponent: CategorySearchComponent,
  PreviousOrders:PreviousOrders

},
{
  initialRouteName:"Main",
  contentComponent:({navigation}) => (
      <Menu53Component navigation={navigation} />
  ),
  drawerWidth: width/1.2,
  drawerBackgroundColor:"none",
 
  defaultNavigationOptions: navigation => ({
   gestureEnabled: true,
   headerMode: null
  })
},

)



const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: {screen: Container},
      Loading:    SplashScreenComponent,
      DashboardDrawer : DrawerScreens
    },
    {
      initialRouteName: 'Loading',
    },
    
  ),
);

class RootRouter extends Component {
  render() {
    return (
        
      <AppContainer
        ref={navigtaionRef => {
          NavigationService.setTopLevelNavigator(navigtaionRef);
        }}
      />
    );
  }
}

export default RootRouter;
