import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity,Modal,TouchableNativeFeedback,ActivityIndicator,SafeAreaView,Platform, ActivityIndicator } from 'react-native'
import Colors from '../../constants/Colors'
import { Camera } from 'expo-camera';
import {MaterialCommunityIcons,Feather} from '@expo/vector-icons'

const DESIRED_RATIO = '16:9';
const flashIcons = {
	off: 'zap-off',
	on: 'zap',
	auto: 'crosshair',
	torch: 'sunrise'
};
const flashModeOrder = {
	off: 'on',
	on: 'auto',
	auto: 'torch',
	torch: 'off'
};
 function Camera({navigation}){
    const [hasPermission, setHasPermission] = useState(null);
    const [autoFocus, setautoFocus] = useState('on');
    const [flash, setFlash] = useState('off');
    const [ratio, setRatio] = useState(DESIRED_RATIO);
    const [capturing, setcapturing] = useState(false);
    const [type, setType] = useState(Camera.Constants.Type.back);

     useEffect(() => {
        (async () => {
          const { status } = await Camera.CameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
      openCamera = ()=>{
          setShowCamera(true)
      }
      toggleFlash = () =>{
          setFlash(flashModeOrder[flash])
        }
		
      prepareRatio = ()=>{
        if(Platform.OS==="android" && camera){
            const ratios = await camera.getSupportedRatiosAsync();
			const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
            setRatio(ratio)
			
        }
      }
      showLoading=()=>{
          if(capturing === true){
            return(
                <ActivityIndicator/>
            )
          }
      }
      takePicture =()=>{

      }
      showCamera = ()=>{
        if (hasPermission === null) {
            return <View />;
          }
          else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
          }
          else{
            return (
                <Camera
                   style={{ flex: 1 }}
                   type={type}
                    onCameraReady={prepareRatio()}
                    ref={(cam) => (camera = cam)}
                    style={{ flex: 1 }}
                    flashMode={flash}
                    autoFocus={autoFocus}
                    ratio={ratio} >
                    <View style={{flex: 1,backgroundColor: 'transparent',flexDirection: 'row',}}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 15}}>
							{showLoading()}
							<TouchableOpacity style={{ paddingHorizontal: 0 }} onPress={props.switchState(false)}>
								<View style={{backgroundColor:Colors.black,borderRadius:40,padding:6}}>
									<MaterialCommunityIcons name="close" color="white" size={22} />
								</View>
							</TouchableOpacity>
							<View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
								<TouchableOpacity
									style={{ paddingHorizontal: 10 }}
									onPress={toggleFlash()}
								>
									<View style={{backgroundColor:Colors.black,borderRadius:40,padding:8}}>
										<Feather
											name={flashIcons[this.state.flash]}
											color="white"
											size={18}
										/>
									</View>
								</TouchableOpacity>
							</View>
						</View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                             <View style={styles.camera}>
								<Button type="camera" onClick={takePicture()}>
									<View style={styles.cameraContainer}>
										<View style={styles.cameraStyle}></View>
									</View>
								</Button>
							</View>
						</View>
                    </View>
                  </Camera>
              );
          }
      }
    return(
           <Modal
				visible={this.props.showCamera}
				onRequestClose={() => props.switchState(false)}
				presentationStyle="fullScreen"
			>
				<View style={{ flex: 1 }}>
					<StatusBar hidden={true}/>
					{showCamera()}
				</View>
			</Modal>
    )
}
export default Camera;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btnContainer:{
        // flex:1,
        justifyContent:'flex-start',
        paddingHorizontal:20,
        marginBottom:80
    },
    camera:{
        height: 100,
        width: 100,
        bottom: 0,
        borderRadius: 100 / 2,
        borderColor: 'white',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraContainer:{
        backgroundColor:Colors.green,
		height: 70,
		width: 70,
		borderRadius: 70 / 2,
		justifyContent: 'center',
		alignItems: 'center'
    },
    cameraStyle:{
        backgroundColor: 'white',
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2
    }
})