/**
 * Second Nature Coding Challenge
 * Isabel Tripp
 *
 * Requirements:
 * 1. The app should display the Second Nature logo at the top
 * 2. The app should have text underneath the logo reading 'Hello, my name is '
 * 3. The app should have a text input underneath the 'Hello, my name is '
 *    which when text is entered, appends text to the end of 'Hello, my name is '.
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Colors from './Colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
