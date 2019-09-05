/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const sourceUri =
    (Platform.OS === 'android' ? 'file:///android_asset/' : '') +
    'Web.bundle/loader.html';
  const params = 'platform=' + Platform.OS;
  const injectedJS = `
    if (!window.location.search) {
      var link = document.getElementById('progress-bar');

      
      link.href = './site/index.html?${params}';

      link.click();
    }
  `;

  return (
    <Fragment>
      <Text>gowthami</Text>
      <WebView
        injectedJavaScript={injectedJS}
        source={{uri: sourceUri}}
        javaScriptEnabled={true}
        originWhitelist={['*']}
        allowFileAccess={true}
      />
    </Fragment>
  );
};

export default App;
