import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from '@expo/vector-icons'

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
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='handshake-o' size={30} color='black' />
    }
  },
  Goodbye: {
    screen: Goodbye,
    navigationOptions: {
      tabBarIcon: () => <FontAwesome name='hand-peace-o' size={30} color='black' />
    }
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