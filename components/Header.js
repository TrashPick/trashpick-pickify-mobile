import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends React.Component {
	static defaultProps = {
		title: 'Header Title'
	};

	
	render() {
		return (
			<View>
				<View style={[styles.container, this.props.style]}>
					<View style={styles.backAndTitleContainer}>
						{this.props.leftAction}
					</View>
					<View style={{}}>
						{this.props.rightAction}
					</View>
				</View>
				<View>
					<Text style={styles.headerTitleStyle}>{this.props.title}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		alignItems: 'center'
	},
	backAndTitleContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	headerTitleStyle: {
		fontSize: 18,
		fontFamily:'Medium',
		letterSpacing:0,
		textAlign:'center'
	}
});
