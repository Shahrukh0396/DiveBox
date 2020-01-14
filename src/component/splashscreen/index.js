/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';

import SplashBack from '../../../assets/Splash.png';
import SplashLogo from '../../../assets/splashlogo.png';
import DiveLogo from '../../../assets/diveboxclear2.png';
import Button from 'react-native-button';
import {NavigationService} from '../../services';
const {height, width, fontScale} = Dimensions.get('screen');

class SplashScreenComponent extends Component {
  render() {
    console.log(width);
    return (
      <ImageBackground source={SplashBack} style={styles.Back}>
        <StatusBar  barStyle="light-content" hidden={false} backgroundColor="#FF0F00" />
        <View style={styles.LinearGradient}>
          <View style={styles.imageOuterContainer}>
            <View style={styles.imageInnerContainer}>
              <Image source={SplashLogo} />
            </View>
          </View>
          <View >
            <View style={styles.secondSectionContainer}>
              <Image source={DiveLogo} style={styles.Logo} />
            </View>
            <View style={styles.secondSectionContainer}>
              <Text style={styles.textStyle}>
                Experience local buy and sell with the convenience of on-demand
                delivery. Let's get started!
              </Text>
            </View>
            <View style={styles.secondSectionContainer}>
              <Text style={styles.textStyle}>CONTINUE WITH:</Text>
            </View>
            <View style={styles.secondSectionContainer}>
              <Button
                style={{fontSize: fontScale * 16, color: 'white'}}
                // styleDisabled={{color: 'red'}}
                containerStyle={{
                  padding: 15,
                  width: width / 1.2,
                  height: 60,
                  overflow: 'hidden',
                  borderRadius: 10,
                  backgroundColor: '#E1C73A',
                  justifyContent: 'center',
                }}
                onPress={() => NavigationService.navigate('AuthContainer')}>
                EMAIL
              </Button>
            </View>
            <View
              style={{
                position: 'relative',
                marginTop: 5,
                width: width,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Button
                style={{fontSize: fontScale * 16, color: 'white'}}
                // styleDisabled={{color: 'red'}}
                containerStyle={{
                  padding: 15,
                  width: width / 1.2,
                  height: 60,
                  overflow: 'hidden',
                  borderRadius: 10,
                  backgroundColor: '#504235',
                }}
                // onPress={() => this._handlePress()}
              >
                FACEBOOK
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default SplashScreenComponent;

const styles = StyleSheet.create({
  LinearGradient: {
    //  flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
  },
  Back: {
    // height: height,
    // marginTop: 5,
    width: '100%',
    height: '100%',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  Logo: {},
  innerContainer: {
    // height:height/1.1,

    backgroundColor: 'green',
    // flexDirection: 'column',
    // justifyContent: "space-around",
    // alignItems: 'center',
  },
  imageOuterContainer: {
    // flex: 1,
    height: '30%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  imageInnerContainer: {
    position: 'relative',
    marginTop: 20,
    // height: height / 4,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  secondSectionContainer: {
    // position: 'relative',
    marginTop: 20,
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  textStyle: {
    width: width / 1.2,
    color: 'white',
    textAlign: 'center',
    fontSize: fontScale * 12,
  },
});
