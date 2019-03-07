import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { WebView } from "react-native-webview";

const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

const styles = StyleSheet.create({
  container: {
    width: dimensions.fullWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Web View Example</Text>
        <Button
          title="Make a booking"
          onPress={() => this.props.navigation.navigate('Reserve')}
        />
      </View>
    );
  }
}

class ReserveScreen extends Component {
  render() {
    return (
      <WebView
        source={{ uri: "https://camosuncapstone.checkfront.com/reserve/" }}
        style= {[styles.container]}
        onLoadProgress={e => console.log(e.nativeEvent.progress)}
      />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Reserve: ReserveScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}