import { useTextToSpeech } from './useTextToSpeech';

// Simula a leitura de uma notificação recebida
export const useNotifications = () => {
  const { speak } = useTextToSpeech();

  const readNotification = () => {
    const notificationText = "Você recebeu uma nova mensagem de emergência.";
    speak(notificationText);
  };

  return { readNotification };
};
