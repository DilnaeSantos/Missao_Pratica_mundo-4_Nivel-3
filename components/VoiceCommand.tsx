import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';
import * as Speech from 'expo-speech';

const VoiceCommand: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    // Configuração dos listeners para reconhecimento de voz
    Voice.onSpeechStart = () => setIsListening(true);
    Voice.onSpeechEnd = () => setIsListening(false);
    Voice.onSpeechResults = (event) => {
      const text = event.value && event.value[0]; // Verifica se 'event.value' existe
      if (text) {
        setRecognizedText(text);
        if (text.toLowerCase() === 'ativar alerta') {
          handleSpeech();
        }
      }
    };

    return () => {
      // Limpar os listeners ao desmontar o componente
      Voice.destroy().then(() => {
        // Remover todos os listeners
        Voice.removeAllListeners();
      });
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('pt-BR');
    } catch (error) {
      console.error('Erro ao iniciar o reconhecimento de voz:', error);
    }
  };

  const handleSpeech = () => {
    const text = 'Alerta ativado!';
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diga "Ativar alerta" para ativar o comando de voz</Text>
      <Button
        title={isListening ? 'Ouvindo...' : 'Iniciar Reconhecimento de Voz'}
        onPress={startListening}
      />
      <Text style={styles.text}>Texto Reconhecido: {recognizedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default VoiceCommand;
