import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BottomBar extends React.PureComponent {

  render = () => {
    const { text } = this.props;
    if (!text) return null;
    return (
      <View style={styles.bottomBar}>
        <Text numberOfLines={1} style={styles.text}>
          {text}
        </Text>
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
});