import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HelloWorldProps {
  name?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name = 'World' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HelloWorld;
