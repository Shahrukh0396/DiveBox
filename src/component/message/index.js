import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  BackHandler
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
import MenuImage from '../../../assets/Image17.png';
import MaterialTabs from 'react-native-material-tabs';
import TabBar from '../../../assets/Diveboxasset/Diveboxasset/gradient.png';
import Image1 from '../../../assets/Image10.png';
import Image2 from '../../../assets/Image11.png';

import Image3 from '../../../assets/Image12.png';
import Image4 from '../../../assets/Image13.png';
import { NavigationService } from '../../services';
import HomeButton from '../homeButton/homeButton';
const {height, width, fontScale} = Dimensions.get('screen');

class MessageListBuy1 extends Component {
  state = {
    selectedTab: 0,
  };

  setTab(tab) {
    this.setState({selectedTab: tab});
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
      // <SafeAreaView >

      <View>
        <Header style={styles.headerStyle}>

          <Left style={{flex: 0.3}}>
          <TouchableOpacity onPress={() => NavigationService.navigate('MessageSell3Component', { modalVis: false})}>
            <Icon
              name="arrowleft"
              type="AntDesign"
              fontSize={20}
              style={{color: '#707070'}}
              />
              </TouchableOpacity>
          </Left>
          <Body style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => NavigationService.navigate("Main")}>

                <HomeButton />
            </TouchableOpacity>
          </Body>
          <Right style={{flex: 0.3}}>
            <Icon
              name="search"
              type="EvilIcons"
              fontSize={23}
              style={{color: '#707070'}}
            />
          </Right>
        </Header>
        <View style={styles.MessageContainer}>
          <Text style={styles.innerText}>Messages</Text>
        </View>

        <View>
          <MaterialTabs
            items={['BUY', 'SELL']}
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab.bind(this)}
            barColor="white"
            activeTextColor="black"
            textStyle={{color: 'black'}}
          />
          <View style={styles.tabImageContainer}>
            <View
              style={{
                visibilty: this.state.selectedTab === 0 ? '' : 'hidden',
              }}>
              {this.state.selectedTab === 0 && (
                <Image
                  source={TabBar}
                  style={{
                    width: width / 2,
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

        {this.state.selectedTab === 0 && (
          <List style={{width: width}}>
            <ListItem style={styles.ListItem}>

              <Left style={{flex: 0.3}}>
              <TouchableOpacity onPress={() => NavigationService.navigate("MessageScrolled1")}>
                <Image square source={Image1} />
                </TouchableOpacity>
              </Left>
              <Body>
                <Text style={styles.listText}>Fawsin Calculus Textbook</Text>
                <Text style={{color:'#454F63'}} numberOfLines={1}>
                  Marie Winter
                </Text>
                <Text style={{fontSize: fontScale * 12,color:'#78849E'}} note>
                  Hi Yassine,
                </Text>
                <Text style={{color:'#78849E',fontSize:fontScale*13}} note>Yes - it is sill available!</Text>
              </Body>
              <Right style={{flex: 0.15, marginBottom: 35}}>
                <Icon
                  name="dot-single"
                  type="Entypo"
                  style={{color: '#DD2A18', fontSize: 35}}
                  />
              </Right>
            </ListItem>
            <ListItem style={styles.ListItem}>
              <Left style={{flex: 0.3}}>
                <Image square source={Image2} style={{height: 75}} />
              </Left>
              <Body>
                <Text style={styles.listText}>HP link-Jet Printer</Text>
                <Text style={{color:'#454F63'}} numberOfLines={1}>
                  Grant Marshall
                </Text>
                <Text style={{fontSize: fontScale * 12,color:'#78849E'}} note>
                  No Problem!
                </Text>
              </Body>
              <Right style={{flex: 0.15, marginBottom: 35}}>
                <Icon
                  name="dot-single"
                  type="Entypo"
                  style={{color: '#DD2A18', fontSize: 35}}
                />
              </Right>
            </ListItem>
          </List>
        )}
        {this.state.selectedTab === 1 && (
          <List style={{width: width}}>
            <ListItem style={styles.ListItem}>
              <Left style={{flex: 0.3}}>
                <Image square source={Image3} />
              </Left>
              <Body>
                <Text style={styles.listText}>Mario Party 8 (Wii)</Text>
                <Text style={{color:'#454F63'}} numberOfLines={1}>
                  Micheal Savin
                </Text>
                <Text style={{fontSize: fontScale * 12,color:'#78849E'}} note>
                  Nearly New
                </Text>
              </Body>
              <Right style={{flex: 0.15, marginBottom: 35}}>
                <Icon
                  name="dot-single"
                  type="Entypo"
                  style={{color: '#DD2A18', fontSize: 35}}
                />
              </Right>
            </ListItem>
            <ListItem style={styles.ListItem}>
              <Left style={{flex: 0.3}}>
                <Image
                  square
                  source={Image4}
                  style={{height: 95, paddingTop: 20,borderRadius:15}}
                />
              </Left>
              <Body>
                <Text style={styles.listText}>Element Skateboard</Text>
                <Text  style={{color:'#454F63'}} note numberOfLines={1}>
                  George Falin
                </Text>
                <Text style={{fontSize: fontScale * 12,color:'#78849E'}} note>
                  Barely Used
                </Text>
              </Body>
              <Right style={{flex: 0.15, marginBottom: 35}}>
                <Icon
                  name="dot-single"
                  type="Entypo"
                  style={{color: '#DD2A18', fontSize: 35}}
                />
              </Right>
            </ListItem>
          </List>
        )}
      </View>

      // </SafeAreaView>
    );
  }
}

export default MessageListBuy1;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    width: '100%',
    borderColor: 'white',
    elevation: 0,
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  MessageContainer: {
    backgroundColor: 'white',
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F6',
  },
  innerText: {
    fontSize: fontScale * 30,
    color: '#454F63',
    paddingLeft: 15,
    fontWeight: '700',
  },
  tabImageContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ListItem: {
    width: '90%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  listText: {
    fontSize: fontScale * 14.5,
    fontWeight: 'bold',
    paddingTop: 15,
    color:'#2A2E43'
  },
});