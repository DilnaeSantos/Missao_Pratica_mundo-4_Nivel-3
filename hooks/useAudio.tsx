import { Audio } from 'expo-av';

export const useAudio = () => {
  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/ambiente.mp3')
    );
    await sound.playAsync();
  };

  return { playSound };
};
