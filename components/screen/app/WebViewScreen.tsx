import {
    View,
    StyleSheet
} from "react-native";
import React, { useState } from "react";
import WebView from "react-native-webview";
import {GOOGLE_URL} from "@env";

const WebViewScreen = () => {

    return (
        <View style={styles.container} >
            <View style={{width: '100%', height: '100%'}}>
                <WebView
                    source={{ uri: GOOGLE_URL}}
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    );
};

export default WebViewScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
        flex: 1,
        backgroundColor: "#222",
        alignItems: "center",
        justifyContent: "center",
    },
});
