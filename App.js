import React from 'react';
import BottomBar from './components/BottomBar';
import BarCodeReader from './components/BarCodeReader';
import { StyleSheet, View, LayoutAnimation } from 'react-native';

export default class App extends React.Component {

  state = {
    scannedTxHash: null,
  }

  handleBarCodeScanned = ({ data }) => {
    const { scannedTxHash } = this.state;
    if (data === scannedTxHash) return;
    LayoutAnimation.spring();
    this.setState({ scannedTxHash: data });
  }

  handleTextPress = (text) => {
    alert(text);
  };

  handleCancel = () => {
    this.setState({ scannedTxHash: null });
  };

  render() {
    const { scannedTxHash } = this.state;
    return (
      <View style={styles.container}>
        <BarCodeReader
          onBarCodeScanned={this.handleBarCodeScanned}
        />
        <BottomBar
          onTextPress={this.handleTextPress}
          onCancel={this.handleCancel}
          text={scannedTxHash}
        />
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
