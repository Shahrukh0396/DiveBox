import React, {Component} from 'react';
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Profile from '../../../assets/avatar.png';
import Profile1 from '../../../assets/user photo.png';
import PropTypes from 'prop-types';
import {NavigationService} from '../../services';
const {
  width: viewportWidth,
  height: viewportHeight,
  fontScale,
} = Dimensions.get('window');

export default class RatingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount1: 4,
      starCount2: 5,
    };
  }

  static PropTypes = {
    visible: PropTypes.bool,
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    visible: false,
    buttonText: 'SUBMIT RATING',
  };

  handleButton() {
    if (this.props.handleButton) {
      this.props.handleButton();
      NavigationService.navigate('Main');
    }
  }

  onStarRatingPress1(rating) {
    this.setState({
      starCount1: rating,
    });
  }

  onStarRatingPress2(rating) {
    this.setState({
      starCount2: rating,
    });
  }

  render() {
    const {visible, buttonText, handleButton} = this.props;
    return (
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.popup_backdrop}>
          <View style={styles.popup_container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                paddingBottom: 20,
              }}>
              <Image source={Profile} style={{height: 40, width: 40}} />
              <View
                style={{
                  backgroundColor: 'rgb(44,46,69)',
                  height: 20,
                  borderRadius: 10,
                  top: 24,
                  right: 15,
                }}>
                <Text style={{color: 'white', fontSize: fontScale * 10}}>
                  4.5
                </Text>
              </View>
              <View style={{flexDirection: 'column', left: 5}}>
                <Text style={{color: 'white', textAlign: 'left'}}>Ryan</Text>
                <Text style={{color: 'grey', textAlign: 'left', fontSize: 12}}>
                  Audi S7 - H32KHS
                </Text>
              </View>
            </View>
            <View style={{width: 200, top: 10, alignSelf: 'center'}}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
                Rate your carrier
              </Text>
              <View
                style={{
                  top: 10,
                  width: '70%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={28}
                  fullStarColor="orange"
                  emptyStarColor="#707070"
                  rating={this.state.starCount1}
                  selectedStar={rating => this.onStarRatingPress1(rating)}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: 'grey',
                // backgroundColor: 'red',
                borderBottomWidth: 0.5,
                paddingBottom: 20,
                justifyContent: 'center',
                top: 60,
              }}>
              <Image source={Profile} style={{height: 40, width: 40}} />
              <View
                style={{
                  backgroundColor: 'rgb(44,46,69)',
                  height: 20,
                  borderRadius: 10,
                  top: 24,
                  right: 15,
                }}>
                <Text style={{color: 'white', fontSize: fontScale * 10}}>
                  4.5
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={{textAlign: 'left', color: 'white'}}>Marie</Text>
                <Text style={{textAlign: 'left', color: '#707070', fontSize: fontScale*12}}>
                  15 york unit #1504
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 200,
                top: 80,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{color: '#707070', textAlign: 'center', fontSize: 14}}>
                Rate your seller
              </Text>
              <View
                style={{
                  top: 10,
                  width: '70%',
                  justifyContent: 'center',
                  left: 25,
                }}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  starSize={28}
                  fullStarColor="orange"
                  rating={this.state.starCount2}
                  selectedStar={rating => this.onStarRatingPress2(rating)}
                />
              </View>
            </View>
            <View style={{top: 120}}>
              <TouchableOpacity
                onPress={() => this.handleButton()}
                style={{
                  backgroundColor: '#FF3100',
                  justifyContent: 'center',
                  borderRadius: 10,
                  alignSelf: 'center',
                  width: '90%',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    margin: 12,
                    color: 'white',
                    fontSize: 16,
                  }}>
                  {buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );;
  }
}

const styles = StyleSheet.create({
  popup_backdrop: {
    // backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 25,
    // paddingTop: 220,
    // alignItems:'center',
    justifyContent: 'center',
    height: viewportHeight,
    marginTop: 20,
  },
  popup_container: {
    backgroundColor: 'rgb(41,46,65)',
    height: 450,
    textAlign: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  text_title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  text_description: {
    color: '#425159',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
  },
  form_button1: {
    backgroundColor: '#ebebf1',
  },
  tagTextOuter: {
    position: 'absolute',
    width: '20%',
    bottom: 3,
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
    height: 14,
    zIndex: 100,
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
    fontSize: fontScale * 16,
  },
});

