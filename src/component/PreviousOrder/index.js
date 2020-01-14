/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    Dimensions,
    Text,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { Icon } from 'native-base';
import Path from '../../../assets/path.png';
import image7 from '../../../assets/Image12.png';
import image8 from '../../../assets/Image13.png';
import { NavigationService } from '../../services';
import { ConfirmOrder } from '../currentOrderModal';
import DrawerIcon from '../../../assets/sidebaricon.png';
import { ConfirmedOrder } from '../confirmedOrder/confirmedOrder';
import StarRating from 'react-native-star-rating'


const { height, width, fontScale } = Dimensions.get('screen');

export default class PreviousOrders extends Component {
    constructor() {
        super();
        this.state = {
            Games: [
                { image: image7, Name: 'Calculator XT Brand New',rating:4, Caption: 'Nearly new', Price: '$50.50' },
                { image: image8, Name: 'Quick Silver Skateboard', rating:5,Caption: 'Barely Used', Price: '$42.50' },
                // {image: image7, Name: 'Mario Party 8 (Wii)', Caption: 'Nearly new'},
                // {image: image7, Name: 'Mario Party 8 (Wii)', Caption: 'Nearly new'},
            ],
            Orders: true,
            starCount1: 4
        };
    }
    orderFlag = () => {
        this.setState({ Orders: !this.state.Orders })
    }
    onStarRatingPress1(rating) {
        this.setState({
            starCount1: rating,
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 0.19,
                            backgroundColor: 'rgb(44,46,69)',
                            width: width,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <View
                            style={{
                                backgroundColor: 'white',
                                width: width * 0.9,
                                borderRadius: 10,
                                flexDirection: 'row',
                                height: 50,
                                padding: 10,
                                // top: 5,
                                alignItems: 'center',
                            }}>
                            <Icon name="search" type="EvilIcons" color="#707070" />
                            <TextInput
                                placeholder="Search"
                                placeholderTextColor="grey"
                                style={{ height: 50, width: width * 0.68, borderRadius: 10 }}
                            />
                            <Image source={Path} />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        style={{ position: 'absolute', zIndex: 1000, left: 0, top: 50 }}>
                        <Image source={DrawerIcon} />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                        }}>
                        <View style={{ height: '15%', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    fontSize: fontScale * 30,
                                    left: 20,
                                    color: 'rgb(44,46,69)',
                                }}>
                                My Previous Orders
              </Text>
                        </View>
                        <View
                            style={{
                                marginHorizontal: 20,
                            }}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                style={{ height: '80%' }}>
                                <View style={{ marginBottom: 120 }}>
                                    {this.state.Games.map((text, index) => {
                                        return (
                                            <>
                                                <TouchableOpacity key={index} style={{ height: '55%' }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View
                                                            style={{
                                                                flex: 0.4,
                                                                top: 5,
                                                            }}>
                                                            <Image
                                                                source={text.image}
                                                                style={{
                                                                    width: '100%',
                                                                    borderRadius: 20,
                                                                }}
                                                            />
                                                        </View>
                                                        <View
                                                            style={{
                                                                flex: 1,
                                                                flexDirection: 'column',
                                                                justifyContent: 'space-around',
                                                                left: 15,
                                                            }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: fontScale * 16,color:'#2A2E43' }}>{text.Name}</Text>
                                                            <View style={{width:'40%'}}>
                                                                <StarRating
                                                                    disabled={false}
                                                                    maxStars={5}
                                                                    starSize={20}
                                                                    fullStarColor="#FFB900"
                                                                    emptyStarColor="white"
                                                                    rating={text.rating}
                                                                    selectedStar={rating => this.onStarRatingPress1(rating)}
                                                                />
                                                            </View>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <Text style={{ color: '#838EA6' }}>
                                                                    {text.Caption}
                                                                </Text>
                                                                <Text style={{ textAlign: "right", left: 90,fontSize:fontScale*14,color:'#919191' }}>
                                                                    {text.Price}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                                <View
                                                    style={{
                                                        borderTopColor: 'lightgrey',
                                                        bottom: 5,
                                                        borderTopWidth: 1,
                                                    }}
                                                />
                                            </>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    {
                        this.state.Orders ?
                            <ConfirmOrder orderFunction={this.orderFlag} />
                            :
                            <ConfirmedOrder orderFunction={this.orderFlag} />
                    }
                </View>
            </SafeAreaView>
        );
    }
}