/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  BackHandler,
  KeyboardAvoidingView,
} from 'react-native';
import {Icon} from 'native-base';
import Path from '../../../assets/path.png';
import image7 from '../../../assets/Image14.png';
import HomeDecor from '../../../assets/Home-Decor.png';
import image8 from '../../../assets/Image14.png';
import {NavigationService} from '../../services';
import DrawerIcon from '../../../assets/sidebaricon.png';
import {ConfirmOrder} from '../currentOrderModal';
import {ConfirmedOrder} from '../confirmedOrder/confirmedOrder';

const {height, width, fontScale} = Dimensions.get('screen');

export default class CategorySearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      Orders: true,
      List: [
        {
          Image: HomeDecor,
          Title: 'Lamp',
          Details: 'Barely Used - 20 min away',
          Added: 'Added · 1h ago',
          Price: '60',
        },
        {
          Image: HomeDecor,

          Title: '3 Pillows',
          Details: 'Barely Used - 35 min away',
          Added: 'Added · 2h ago',
          Price: '50',
        },
        {
          Image: HomeDecor,
          Title: 'Cushions',
          Details: 'Barely Used - 35 min away',
          Added: 'Added · 5h ago',
          Price: '45',
        },
        {
          Image: HomeDecor,
          Title: 'Table Cloth Package',
          Details: 'Barely Used - 5 min away',
          Added: 'Added · 1d ago',
          Price: '45',
        },
      ],
    };
  }

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
    orderFlag = () => {
      this.setState({Orders: !this.state.Orders});
    };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: '100%'}}>
          {/* <KeyboardAvoidingView enabled={false}> */}
          <StatusBar barStyle="light-content" hidden={false} />

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
              style={{
                backgroundColor: 'white',
                // width: width * 0.9,
                borderRadius: 10,
                padding: 10,
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
              }}>
              <Icon name="search" type="EvilIcons" color="#707070" />
              <TextInput
                placeholder="Fawsin Calculus"
                placeholderTextColor="#78849E"
                style={{
                  height: 50,
                  width: width * 0.7,
                  borderRadius: 10,
                  left: 15,
                  fontSize: fontScale * 16,
                }}
              />
              <Image source={Path} />
            </View>
          </View>

          <TouchableOpacity
             onPress={() => this.props.navigation.openDrawer()}
            style={{position: 'absolute', top: 50, zIndex: 100}}>
            <Image
              source={DrawerIcon}
              style={{height: 60, width: 32, zIndex: 100}}
            />
          </TouchableOpacity>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: '93%'}}>
          <View style={{height: '22%'}}>
          <View style={{width: '70%'}}>
              <Text
                style={{
                  fontSize: fontScale * 30,
                  left: 20,
                  top: 20,
                  color: '#454F63',
                }}>
                Search results for "Home Decor"
              </Text>
            </View>
          </View>
          <View
            style={{
              height: '61%',
              borderRadius: 14,
            }}>
            <View
              style={{
                borderColor: 'lightgrey',
                borderWidth: 0.2,
                marginHorizontal: 20,
              }}>
                {this.state.List.map((text, index) => {
                  return (
                    <>
                      <TouchableOpacity key={index}>
                        <View style={{flexDirection: 'row', left: 10, top: 10}}>
                          <Image
                            source={text.Image}
                            style={{marginHorizontal: 10, width: 50, height: 50}}
                          />
                          <View style={{flexDirection: 'column'}}>
                            <View style={{width: '100%', flexDirection: 'row'}}>
                              <Text style={{width: '70%', color: '#454F63'}}>
                                {text.Title}
                              </Text>
                              <Text
                                style={{
                                  width: '15%',
                                  textAlign: 'right',
                                  color: '#454F63',
                                }}>
                                ${text.Price}
                              </Text>
                            </View>
                            <Text style={{color: '#78849E'}}>
                              {text.Details}
                            </Text>
                            <Text style={{color: '#78849E'}}>{text.Added}</Text>
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
                    </>
                  );
                })}
            </View>
          </View>
              </ScrollView>
          {/* </KeyboardAvoidingView> */}
          {this.state.Orders ? (
            <ConfirmOrder orderFunction={this.orderFlag} />
          ) : (
            <ConfirmedOrder orderFunction={this.orderFlag} />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
