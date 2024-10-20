import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

const TextToSpeech: React.FC = () => {
  const [text, setText] = useState('');
  const { speak } = useTextToSpeech();

  const handleSpeak = () => {
    speak(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o texto para falar"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
      />
      <Button title="Falar Texto" onPress={handleSpeak} />
    </View>
  );
};

export default TextToSpeech;
