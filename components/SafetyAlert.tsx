import React from 'react';
import { Button } from 'react-native';
import { useSafetyAlerts } from '../hooks/useSafetyAlerts';

const SafetyAlert: React.FC = () => {
  const { triggerAlert } = useSafetyAlerts();

  return <Button title="Ativar Alerta de Segurança" onPress={triggerAlert} />;
};

export default SafetyAlert;
