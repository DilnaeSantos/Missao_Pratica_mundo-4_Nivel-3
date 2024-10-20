import { useTextToSpeech } from './useTextToSpeech';

export const useSafetyAlerts = () => {
  const { speak } = useTextToSpeech();

  const triggerAlert = () => {
    const alertMessage = "Alerta! Tempestade se aproximando. Tome precauções.";
    speak(alertMessage);
  };

  return { triggerAlert };
};
