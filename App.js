import React from 'react';
import BarCodeReader from './components/BarCodeReader';
import { StyleSheet, View, LayoutAnimation, Text } from 'react-native';

export default class App extends React.Component {

  state = {}

  handleBarCodeScanned = ({ data }) => {
    LayoutAnimation.spring();
    this.setState({ scannedTxHash: data });
  }

  renderTxHash = () => {
    const { scannedTxHash } = this.state;
    if (!scannedTxHash) return;
    return (
      <Text numberOfLines={1}>
        {scannedTxHash}
      </Text>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <BarCodeReader
          onBarCodeScanned={this.handleBarCodeScanned}
        />
        {this.renderTxHash()}
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
