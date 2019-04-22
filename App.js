import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const Hello = () => {
  return (
    <View style={styles.item}>
      <Text>Hello!</Text>
    </View>
  )
}

const Goodbye = () => {
  return (
    <View style={styles.item}>
      <Text>Goodbye!</Text>
    </View>
  )
}

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello,
  },
  Goodbye: {
    screen: Goodbye,
  },
})

// Required by React Navigation v3
const AppContainer = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20}}></View>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})