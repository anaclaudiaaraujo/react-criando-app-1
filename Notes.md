Repositório para anotações e exercícios relacionados ao curso [Reacte Native: criando um app](https://cursos.alura.com.br/course/react-native-comecando-zero)


# Conteúdo
## Módulo 1 - Criando o projeto
- Preparação do ambiente
    - Instalação do Node.js e do Expo para poder desenvolver aplicativos React Native com Expo.
- Diferenças entre React Native CLI e Expo CLI
    - Expo CLI cria uma aplicação React Native com limitações, em contrapartida, é possível testar as aplicações sem configurar Android Studio ou Xcode.
- Criar um aplicativo Expo do zero com Expo CLI para criar um projeto React Native em branco.
- Função live reload
    - O React Native vem por padrão com a funcionalidade de live reload, que atualiza a tela do app ao salvar novos códigos em tempo real.

### Configuração inicial
- Iniciar projeto expo: expo init nome-projeto
    - Caso ocorra erro, abrir o powershell como admin e rodar o comando `Set-ExecutionPolicy RemoteSigned` e tentar novamente
- Executar o comando `npx expo install react-dom react-native-web @expo/webpack-config`
- `npm start` para iniciar o projeto.
- `npx expo-doctor` [ver mais](https://www.npmjs.com/package/expo-doctor)
## Módulo 2 - Componentes e estilos
- Utilizar componentes:
    - Aprendemos a utilizar componentes próprios do react native como Text e View, componentes de bibliotecas e também nossos próprios componentes.
- Criar componentes:
    - Utilizando funções, criamos nosso primeiro componente: a Cesta.
- Estilizar componentes:
    - A fim de sermos mais fiéis ao layout, usamos estilos para mudar fontes, tamanhos, alinhamentos, espaçamentos e cores.
- Fonte externa:
    - Usando uma biblioteca do expo, adicionamos uma fonte externa do Google Fontes e aplicamos um texto na nossa aplicação.

## Módulo 3 - Refatorando
- Reutilizar componentes:
    - Aprendemos a criar um componente reutilizável que encapsula a lógica de trocar a fonte do texto automaticamente.
- Usar parâmetros:
    - Aprendemos a passar e resgatar parâmetros nos componentes.
- Desconstruir objetos:
    - Conseguimos remover a camada externa dos objetos para que possamos passar cada parâmetro do objeto como um parâmetro do componente, simplificando a declaração desses parâmetros.
- Estender o tempo da splash screen:
    - Usando a biblioteca do Expo para chamar o AppLoading, podemos fazer a splash screen ser exibida por mais tempo enquanto as funções do nosso app são carregadas antes de exibir o conteúdo de fato.

## Módulo 4 - Botão e lista
- Button:
    - Aprendemos a usar o Button, que é um botão simples e com pouca customização.
- Botão Customizado:
    - Com os componentes TouchableOpacity, TouchableWithoutFeesback, criamos botões muito mais customizados.
- ScrollView:
    - Aprendemos a usar a ScrollView para permitir rolagem na tela, desde que não usando FlatList, pois há incompatibilidades entre esses dois componentes.
- FlatList:
    - Aprendemos a otimizar listas e fazer a rolagem da tela exclusivamente com o FlatList.
