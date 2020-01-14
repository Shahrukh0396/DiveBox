import React, { Component } from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import TopLogo from '../../../assets/Image17.png'
import { NavigationService } from '../../services'

export default class HomeButton extends Component {
    render() {
        return (
                <TouchableOpacity onPress={() => NavigationService.navigate("Main")} style={{width:'18%'}}>
                    <Image source={TopLogo} />
                </TouchableOpacity>
        )
    }
}