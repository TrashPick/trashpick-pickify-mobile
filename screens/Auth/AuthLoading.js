import React from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	StatusBar,
	AsyncStorage
} from 'react-native';

export default class AuthLoading extends React.Component {
	constructor(props) {
		super(props);
		this.bootstrapAsync();
	}
	bootstrapAsync = async () => {
		const usertoken = await AsyncStorage.getItem('userToken');
		console.log(usertoken);
		if (usertoken === null) {
			this.props.navigation.navigate('AuthDetails');
		} else {
			this.props.navigation.navigate('Main');
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="dark-content" backgroundColor="white" />
				<ActivityIndicator color="green" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
