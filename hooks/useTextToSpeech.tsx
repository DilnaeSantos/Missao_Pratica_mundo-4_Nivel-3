import * as Speech from 'expo-speech';

export const useTextToSpeech = () => {
  const speak = (text: string) => {
    Speech.speak(text, { language: 'pt-BR' });
  };

  return { speak };
};
