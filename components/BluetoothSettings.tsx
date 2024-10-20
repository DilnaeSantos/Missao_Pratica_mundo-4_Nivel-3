// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import { BleManager, Device } from 'react-native-ble-plx';

// const BluetoothConnection: React.FC = () => {
//   const [bleManager, setBleManager] = useState<BleManager | null>(null);
//   const [devices, setDevices] = useState<Device[]>([]);
//   const [isScanning, setIsScanning] = useState(false);
//   const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

//   useEffect(() => {
//     // Inicializa o BleManager e certifica-se de que está atribuído corretamente
//     const manager = new BleManager();
//     setBleManager(manager);

//     // Limpa o BleManager quando o componente for desmontado
//     return () => {
//       manager.destroy();
//       setBleManager(null);
//     };
//   }, []);

//   const startScan = () => {
//     if (!bleManager) {
//       console.error('BleManager não foi inicializado');
//       return;
//     }

//     setDevices([]);
//     setIsScanning(true);
//     bleManager.startDeviceScan(null, null, (error, device) => {
//       if (error) {
//         console.error('Erro ao escanear dispositivos:', error);
//         setIsScanning(false);
//         return;
//       }

//       if (device && !devices.some(d => d.id === device.id)) {
//         setDevices(prevDevices => [...prevDevices, device]);
//       }
//     });

//     setTimeout(() => {
//       bleManager.stopDeviceScan();
//       setIsScanning(false);
//     }, 10000);
//   };

//   const connectToDevice = async (device: Device) => {
//     if (!bleManager) {
//       console.error('BleManager não foi inicializado');
//       return;
//     }

//     try {
//       await bleManager.stopDeviceScan();
//       const connectedDevice = await device.connect();
//       setConnectedDevice(connectedDevice);
//       console.log('Conectado ao dispositivo:', connectedDevice.name);
//     } catch (error) {
//       console.error('Erro ao conectar ao dispositivo:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title={isScanning ? 'Escaneando...' : 'Iniciar Escaneamento Bluetooth'}
//         onPress={startScan}
//         disabled={isScanning}
//       />
//       <Text style={styles.title}>Dispositivos Encontrados:</Text>
//       <FlatList
//         data={devices}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.deviceContainer}>
//             <Text>{item.name || 'Dispositivo Desconhecido'}</Text>
//             <Button
//               title="Conectar"
//               onPress={() => connectToDevice(item)}
//             />
//           </View>
//         )}
//       />
//       {connectedDevice && (
//         <Text style={styles.connectedText}>
//           Conectado a: {connectedDevice.name}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   deviceContainer: {
//     marginBottom: 15,
//   },
//   connectedText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'green',
//   },
// });

// export default BluetoothConnection;
