import React from 'react';
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
	componentDidMount() {
		this.animation.play(10,);
	}

	resetAnimation = () => {
		this.animation.reset();
		this.animation.play();
	};

	render() {
		if(this.props.lottie === "wallet"){
			return(
			<LottieView ref={(animation) => {this.animation = animation;}}
				style={{width: 80,height: 70,position: 'relative',left: '50%',marginLeft: -35,top: '50%',marginTop: -35,}}
				source={require('../assets/LottieFiles/1.json')}
			/>
			)
		}else if(this.props.lottie === "location"){
			return(
			<LottieView ref={(animation) => {this.animation = animation;}}
				style={{width: 80,height: 70,position: 'relative',left: '50%',marginLeft: -35,top: '50%',marginTop: -35,}}
				source={require('../assets/LottieFiles/2.json')}
			/>
			)
		}else if(this.props.lottie === "phone"){
			return(
			<LottieView ref={(animation) => {this.animation = animation;}}
				style={{width: 80,height: 70,position: 'relative',left: '50%',marginLeft: -35,top: '50%',marginTop: -35,}}
				source={require('../assets/LottieFiles/3.json')}
			/>
			)
		}
	}
}