import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Alert  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={{color: 'white', fontSize: 30, paddingTop: 20}}>Login</Text>
      </View>

      <View style={styles.box2}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, color: 'white' }}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, color: 'white', marginTop: 10}}
          // onChangeText={text => onChangeText(text)}
          // value={value}
        />
        {/* <Text>Open up App.js to start working on</Text> */}
      </View>

      <View style={styles.box3}>
        {/* <Text>Open up App.js to start working on</Text> */}
        <Button
        title="Login"
        // onPress={() => Alert.alert('Anda Berhasil Login')}
        />
      </View>
      {/* <Text>Open up App.js to start working on</Text> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b03fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    flex: 1,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
