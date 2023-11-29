import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';

import FastImage from 'react-native-fast-image'

export default class CurrentWebcam extends React.Component {
    constructor() {
      super();
      this.state = {
        //imgsource: 'https://ury.org.uk/webcam/view/office?'+Date.now()
        currentimg: 'https://ury.org.uk/webcam/view/studio2?'+Date.now(),
        nextimg: 'https://ury.org.uk/webcam/view/studio2?'+Date.now()
      };
      this.updateCurrent = true;
      this.updateImage = this.updateImage.bind(this);
    }
  
    componentDidMount() {
        updateInterval = setInterval(this.updateImage, 500);
      }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(updateInterval);
     }

    updateImage() {
        if(this.updateCurrent){
            this.setState({currentimg: 'https://ury.org.uk/webcam/view/studio2?'+Date.now()});
        } else {
            this.setState({nextimg: 'https://ury.org.uk/webcam/view/studio2?'+Date.now()});
        }
        this.updateCurrent = !this.updateCurrent;
    }
  
    render() {
      return (
        <View>
            <FastImage
            style={{ width: 200, height: 200, position: "absolute" }}
            source={{
                uri:  this.state.currentimg ,
                headers: { Authorization: 'authToken' },
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain} />
            <FastImage
            style={{ width: 200, height: 200, position: "absolute" }}
            source={{
                uri:  this.state.nextimg ,
                headers: { Authorization: 'authToken' },
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain} />
        </View>
      );
    }
  }
  