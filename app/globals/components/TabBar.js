import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';

import AudioPlayer from './AudioPlayer';


export default class TabBar extends React.Component {
    constructor() {
        super();
      }

    render() {
        return (
        <View>
            <AudioPlayer/>
        </View>
        );
    }     
}