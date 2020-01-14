/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RootRouter from './src/routes';



console.ignoredYellowBox = true;
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
       <RootRouter />
  
    );
  }
}
