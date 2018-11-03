import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarCodeReader extends React.Component {

  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  handleBarCodeScanned = (result) => {
    const { onBarCodeScanned } = this.props;
    if (onBarCodeScanned) onBarCodeScanned(result)
  }

  render = () => {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return (<Text>Requesting for camera permission</Text>);
    }
    if (hasCameraPermission === false) {
      return (<Text>Camera permission is not granted</Text>);
    }
    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={StyleSheet.absoluteFill}
      />
    );
  }
}
