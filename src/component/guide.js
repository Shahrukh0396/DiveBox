import React, { Component } from 'react'
import { View, SafeAreaView, Image, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Guidepic from '../../assets/Guide.png'
import Guide2 from '../../assets/Guidepic2.png'
import pagination from '../../assets/pagination.png'
import { NavigationService } from '../services';

const { height, width } = Dimensions.get('screen');

export default class Guide extends Component {
    render() {
        return (
            <SafeAreaView style={{ height: height , width: width }}>
                <ScrollView style={{height:height , width:width}}>
                    <View style={{ alignSelf: 'center', marginTop: 50 }}>
                        <Image source={Guidepic} style={{ width: width * 0.9, borderRadius: 10 }} />
                        <Image source={Guide2} style={{ position: 'absolute', bottom: 5, left: 50 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'left', fontSize: 45, fontWeight: 'bold', color: 'grey', marginLeft: 20 }}>
                            Save money.
                    </Text>
                        <Text style={{ textAlign: 'left', fontSize: 45, fontWeight: 'bold', color: 'grey', marginLeft: 20 }}>
                            Save time.
                    </Text>
                        <Text style={{ textAlign: 'left', fontSize: 45, fontWeight: 'bold', color: 'grey', marginLeft: 20 }}>
                            Save the planet.
                    </Text>
                    </View>
                    <View style={{ marginTop: 50}}>
                        <Text style={{ textAlign: 'center', fontSize: 40 }}>
                            Welcome
                        </Text>
                        <Text style={{ textAlign: 'center', color: 'grey',marginTop:10 }}>
                            Experience local Buy and Sell with the convinience of on-demand delivery. Let's Go Started!
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={pagination}  style = {{marginLeft:30,top:30}}/>
                    <View style={{ alignSelf: 'center', marginTop: 40,left:90 }}>
                        <TouchableOpacity onPress={() => NavigationService.navigate("Dashboard")} style={{ backgroundColor: '#ff3100', height: 40, width: 90, justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
