import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import sc from './assets/sc.png'

export default class TransactionScreen extends React.Component{
    constructor()
    {
        super();
        this.state={
            hasCameraPermissions:null,
            scaned:false,  
            scannedData:" ",
            buttonState:'normal'
        }
    }
    getCameraPermissions=async()=>{
        const {status}=await Permissions.askasync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions:status==='granted',
            buttonState:'clicked'
        })
    }
    render()
    {
        const hasCameraPermissions=this.state.hasCameraPermissions;
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              
      <Image source={sc} style={{ width: 305, height: 159 }} /> 
            <Text>scanner</Text>

            <TouchableOpacity
            onPress={this.getCameraPermissions}
            style={styles.scanButton}>
                   <Text>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
                    )
    }
}
const styles=StyleSheeet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    displayText:{
        fontSize:50,
        textdecorationline:'underline'
    },
    scanButton:{
        backgroundcolor: "red",
        margin:10,
        padding:100
    }
})