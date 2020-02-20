/**
 * Second Nature React Native Challenge
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
  Image,
  TextInput,
} from 'react-native';

import Colors from './Colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };

    this.updateName = this.updateName.bind(this);
  }

  updateName = text => {
    this.setState({
      name: text,
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.sectionContainer}>
              <Image
                source={require('./assets/sn-logo-black-side.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.textSection}>
                  Hello, my name is:{' '}
                  <Text style={styles.highlight}>{this.state.name}</Text>
                </Text>
              </View>
              <View style={styles.inputSection}>
                <TextInput
                  style={styles.input}
                  onChangeText={text => this.updateName(text)}
                  value={this.state.name}
                  maxLength={50}
                  selectionColor={Colors.red}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.blue,
  },
  highlight: {
    fontWeight: 'bold',
  },
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: Colors.dark,
    fontWeight: '500',
    marginLeft: '5%',
  },
  inputSection: {
    backgroundColor: Colors.lighter,
    marginRight: '10%',
    marginLeft: '10%',
    marginBottom: 30,
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: Colors.purple,
  },
  textSection: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
  },
});
