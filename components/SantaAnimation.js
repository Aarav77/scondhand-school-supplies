import React from 'react';
import LottieView from 'lottie-react-native';
import { render } from 'react-dom';
export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView source={require('../assets/41831-santa-claus.json')}
            style={{width:'60%'}} autoPlay loop
            ></LottieView>
        )
    }
}