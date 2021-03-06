import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import BarCodeReader from './components/BarCodeReader';
import BottomBar from './components/BottomBar';
import Transaction from './models/Transaction';
import hex2a from './utils/hex2a';

export default class App extends React.Component {

  state = {
    scannedTxHash: null,
  }

  handleBarCodeScanned = ({ data }) => {
    const { scannedTxHash } = this.state;
    if (data === scannedTxHash) return;
    this.setState({ scannedTxHash: data });
  }

  showMessage(hexMessage) {
    if (!hexMessage) {
      Alert.alert('No Transaction message found.');
      return;
    }
    if (hexMessage.startsWith('0x')) hexMessage = hexMessage.substr(2);
    Alert.alert(
      'Transaction message:',
      hex2a(hexMessage),
    );
  }

  showError(message) {
    Alert.alert('Error:', message);
  }

  handleOpenMessagePress = () => {
    const { scannedTxHash } = this.state;
    Transaction.find(scannedTxHash)
      .then(this.showMessage)
      .catch(this.showError);
  }

  showYesNoAlert = (title, message, onYesPress) => {
    Alert.alert(
      title,
      message, [
        { text: 'Yes', onPress: onYesPress },
        { text: 'No' }
      ]
    );
  }

  handleTxHashPress = (txhash) => {
    this.showYesNoAlert(
      'Open the message of this Transaction?',
      txhash, this.handleOpenMessagePress,
    );
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
          onTextPress={this.handleTxHashPress}
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
