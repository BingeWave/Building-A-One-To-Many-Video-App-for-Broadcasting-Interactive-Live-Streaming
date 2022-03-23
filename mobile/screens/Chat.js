import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Chat({ navigation }) {

    return (
        <WebView 
            source={{ uri: 'https://widgets.bingewave.com/webrtc/xxxxx'}}
            style={{flex:1}}
            javaScriptEnabled={true}    
            allowsInlineMediaPlayback={true}
        />
    );
  }
  