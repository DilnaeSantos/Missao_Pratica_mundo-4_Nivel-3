import React from 'react';
import { Button } from 'react-native';
import { useNotifications } from '../hooks/useNotifications';

const NotificationReader: React.FC = () => {
  const { readNotification } = useNotifications();

  return <Button title="Ler Notificação" onPress={readNotification} />;
};

export default NotificationReader;
