import * as React from 'react';
import { Button, View } from 'react-native';

import SoundPlayer from 'react-native-sound-player';

export default class AudioPlayer extends React.Component {
    constructor() {
      super();
      this.state = {
        buttontext: 'play'
      };
      this.toggleSound = this.toggleSound.bind(this);
      this.playing = false;
    }
  
    componentDidMount() {
      }

    componentWillUnmount() {
     }

    toggleSound() {
      if(this.playing){
        SoundPlayer.stop();
        this.setState({buttontext: 'Play'});
        this.playing = false;
      } else {
        SoundPlayer.playUrl('http://audio.ury.org.uk/live-mobile');
        this.setState({buttontext: 'Stop'});
        this.playing = true;
      }
    }

    render() {
      return (
        <View>
            <Button
          title={this.state.buttontext}
          onPress={() => this.toggleSound()}
        />
        </View>
      );
    }
  }
  