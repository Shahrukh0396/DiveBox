import React, { Component } from 'react'
import { View, Modal, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'
import Profile from '../../../assets/avatar.png'
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import visa from '../../../assets/visa.png'

export default class ModalComponent extends Component {

    static PropTypes = {
        visible: PropTypes.bool,
        buttonText: PropTypes.string,
    }

    static defaultProps = {
        visible: false,
        buttonText: 'Confirm Order'
    }

    handleButton() {
        if (this.props.handleButton) {
            this.props.handleButton();
        }
    }

    render() {
        const {
            visible,
            buttonText,
            handleButton,
        } = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => { }}>
                <View style={styles.popup_backdrop}>
                    <View style={styles.popup_container}>
                        <View style={{ backgroundColor: 'rgb(71,78,97)', height: '15%', top: 0, justifyContent: 'center' }}>
                            <Text style={{ color: 'white', left: 20 }}>Pay $45</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 30 }}>
                            <Image source={Profile} />
                            <View style={{ flexDirection: 'column', left: 20 }}>
                                <Text style={{ color: 'white' }}>Fawsin Calculus Textbook</Text>
                                <Text style={{ color: 'white' }}>Immediate delivery</Text>
                                <Text style={{ color: '#ff3100' }}>Will arive at 8:30 p.m</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' ,justifyContent:'space-evenly',width:'90%',alignSelf:'center'}}>
                            <Image source={visa} style={{  top: 10,left:5 }} />
                            <Text style={{ color: 'white', textAlignVertical: 'center',top:5,fontSize:16,width:'60%',left:5 }}>Visa****3440</Text>
                            <Icon name="chevron-right" type="Entypo" style={{ color: 'white', left: 0, top: 0 , fontSize:25 }} />
                        </View>
                        <View style={{ top: 30, flexDirection: 'row',justifyContent:'space-evenly',width:'90%',alignSelf:'center'}}>
                            <Icon name="crosshairs-gps" type="MaterialCommunityIcons" style={{ color: 'white',fontSize:22,left:5 }} />
                            <View style={{ flexDirection: 'column',right:5 }}>
                                <Text style={{ color: 'white', textAlign: 'left', left: 5 }}>25 min delivery time(estimated)</Text>
                                <Text style={{ color: 'grey', textAlign: 'left', left: 5 }}>228 Queens Quay West, Toronto</Text>
                            </View>
                            <Icon name="chevron-right" type="Entypo" style={{ color: 'white', top: 5 ,fontSize:25}} />
                        </View>
                        <View style={{ top: 50 }}>
                            <TouchableOpacity onPress={() => this.handleButton()} style={{ backgroundColor: '#ff3100', justifyContent: 'center', borderRadius: 10, alignSelf: 'center', width: '45%' }}>
                                <Text style={{
                                    textAlign: 'center',
                                    margin: 12,
                                    color: 'white',
                                    fontSize: 16,
                                }}>{buttonText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    popup_backdrop: {
        // backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop:250,
        height: viewportHeight,
        width:'95%',
        alignSelf:'center'
    },
    popup_container: {
        backgroundColor: 'rgba(0,0,0,0.9)',
        height: '50%',
        textAlign: 'center'

    },
    text_title: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15,
        textAlign: 'center'
    },
    text_description: {
        color: '#425159',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
        textAlign: 'center',
    },
    form_button1: {
        backgroundColor: '#ebebf1'
    }
});