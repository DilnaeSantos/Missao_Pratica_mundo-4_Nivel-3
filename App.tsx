import { View, StyleSheet } from 'react-native';
import AudioPlayer from './components/AudioPlayer';
//import BluetoothSettings from './components/BluetoothSettings';
import VoiceCommand from './components/VoiceCommand';
import TextToSpeech from './components/TextToSpeech';
import NotificationReader from './components/NotificationReader';
import SafetyAlert from './components/SafetyAlert';
import * as React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <AudioPlayer />
      <VoiceCommand />
      <TextToSpeech />
      <NotificationReader />
      <SafetyAlert />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
