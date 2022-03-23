import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Stream({ navigation }) {


    return (
        <WebView 
            source={{ uri: 'https://widgets.bingewave.com/broadcast/xxxx'}} 
            style={{flex:1}}
            javaScriptEnabled={true}    
            allowsInlineMediaPlayback={true}
        />
    );
  }
  