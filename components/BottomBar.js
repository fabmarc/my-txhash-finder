import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class BottomBar extends React.PureComponent {

  handleTextPress = () => {
    const { text, onTextPress } = this.props;
    if (onTextPress) onTextPress(text);
  }

  handleCancelPress = () => {
    const { text, onCancel } = this.props;
    if (onCancel) onCancel(text);
  }

  render = () => {
    const { text, onCancel } = this.props;
    if (!text) return null;
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={this.handleTextPress}
        >
          <Text numberOfLines={1} style={styles.text}>{text}</Text>
        </TouchableOpacity>
        {
          onCancel &&
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.handleCancelPress}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        }
      </View>
    );
  };
}

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});