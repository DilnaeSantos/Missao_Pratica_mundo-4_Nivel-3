# 📝 Relatório Discente de Acompanhamento

## Informações do Curso

- **Projeto:** Aplicativo de Sensores para Wear OS
- **Curso:** Desenvolvimento Full Stack
- **Universidade:** Estácio de Sá - Campus São José dos Pinhais
- **Período:** 4º Período
- **Turma:** 9001
- **Tecnologia:** React Native
- **Tutor:** Altamira de Souza Queiroz
- **Matéria:** Lidando Com Sensores em Dispositivos Móveis (RPG0025)

## Informações do Aluno

- **Nome:** Dilnae Rennan Souza dos Santos
- **Matrícula:** 202302631631

## Estruturação do Projeto no React Native

O projeto de sensores para Wear OS seguiu uma estrutura modular, organizada da seguinte forma:

- **Components:** Contém componentes reutilizáveis, como `VoiceCommand` e `BluetoothConnection`. Isso permitiu a modularização e reutilização de funcionalidades.
- **Services:** Inclui lógica específica para funcionalidades, como manipulação de áudio e configuração de Bluetooth.
- **Assets:** Contém ícones e sons utilizados nas funcionalidades de áudio.
- **App.tsx:** Arquivo principal que configura a navegação e a estrutura básica do aplicativo.

### Estrutura do Código

O aplicativo foi desenvolvido utilizando os principais componentes do React Native, o que permitiu uma interface responsiva e funcionalidades integradas. Alguns dos componentes principais incluem:

- **View e Text:** Para estruturar a interface e exibir informações.
- **Button:** Para ações do usuário, como iniciar o reconhecimento de voz.
- **useEffect e useState:** Hooks do React utilizados para gerenciar o estado e os efeitos colaterais do componente.

### Funcionalidades do Aplicativo

#### Comando de Voz

- O aplicativo utiliza a biblioteca `react-native-voice` para reconhecimento de voz. Os usuários podem ativar comandos ao falar frases específicas, como "Ativar alerta".
- Ao reconhecer o comando, o app utiliza a biblioteca `expo-speech` para fornecer uma resposta de áudio, informando que o alerta foi ativado.

#### Conexão Bluetooth

- O aplicativo tem uma funcionalidade de conexão com dispositivos Bluetooth, que permite aos usuários se conectarem a dispositivos próximos.
- A lógica de conexão inclui verificar se o Bluetooth está ativo e, em seguida, procurar dispositivos disponíveis para emparelhamento.

### Implementação de Funcionalidades

#### Reconhecimento de Voz

A lógica de reconhecimento de voz é implementada com o uso de listeners para eventos, como início e fim do reconhecimento e resultados. Quando o comando "Ativar alerta" é detectado, uma função de resposta por voz é acionada.

#### Configuração do Bluetooth

A configuração do Bluetooth é feita através de bibliotecas específicas para gerenciamento de dispositivos Bluetooth. A lógica envolve a inicialização do Bluetooth, a busca por dispositivos disponíveis e a conexão.

```javascript
const startListening = async () => {
  try {
    await Voice.start('pt-BR');
  } catch (error) {
    console.error('Erro ao iniciar o reconhecimento de voz:', error);
  }
};
```

### Modularização

Os componentes de voz e Bluetooth foram divididos em arquivos separados para facilitar a manutenção e reutilização do código. Isso promove uma estrutura de projeto organizada e escalável.

### Personalização da Interface

A interface foi desenhada com foco na usabilidade, utilizando:

- **Texto Acessível:** Fontes de fácil leitura para melhorar a experiência do usuário.
- **Feedback Auditivo:** Utilização de áudio para fornecer respostas a comandos de voz e alertas de segurança.

### Conclusão e Impacto

O aplicativo de sensores para Wear OS, desenvolvido com React Native, oferece uma solução prática para melhorar a interação e a assistência a funcionários com necessidades especiais. A integração com áudio e Bluetooth torna o app útil para notificações em tempo real e comandos de voz.

A escolha do React Native possibilitou um desenvolvimento rápido e uma única base de código para Android, facilitando a manutenção e atualização do aplicativo.
