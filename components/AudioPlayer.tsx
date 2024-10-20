import React from 'react';
import { Button } from 'react-native';
import { useAudio } from '../hooks/useAudio';

const AudioPlayer: React.FC = () => {
  const { playSound } = useAudio();

  return <Button title="tocar som" onPress={playSound} />;
};

export default AudioPlayer;
