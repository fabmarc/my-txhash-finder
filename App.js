import React from 'react';
import BottomBar from './components/BottomBar';
import BarCodeReader from './components/BarCodeReader';
import { StyleSheet, View, LayoutAnimation, Text } from 'react-native';

export default class App extends React.Component {

  state = {}

  handleBarCodeScanned = ({ data }) => {
    LayoutAnimation.spring();
    this.setState({ scannedTxHash: data });
  }

  render() {
    const { scannedTxHash } = this.state;
    return (
      <View style={styles.container}>
        <BarCodeReader
          onBarCodeScanned={this.handleBarCodeScanned}
        />
        <BottomBar text={scannedTxHash} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
