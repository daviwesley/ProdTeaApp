# ProdTea

### ProdTea App

Aplicativo mobile desenvolvido com [React Native](https://facebook.github.io/react-native/) para auxiliar no gerenciamentos de atividades de crianças com Transtorno do Espectro Autista (TEA) na Universidade Federal do Ceará, esse é um projeto coordenado pela professora Anna Beatriz com os Alunos Davi Wesley, Herison Maciel, Váleria e Leandro.

### Sobre Transtorno do Espectro Autista

O TEA engloba diferentes condições marcadas por perturbações do desenvolvimento neurológico com três características fundamentais, que podem manifestar-se em conjunto ou isoladamente. São elas: dificuldade de comunicação por deficiência no domínio da linguagem e no uso da imaginação para lidar com jogos simbólicos, dificuldade de socialização e padrão de comportamento restritivo e repetitivo.

## Tecnológias
### Backend

 - Firebase(Banco de dados NoSQL)
 - react native firebase(SDK para o react native)

### Aplicativo

 - react native paper(componentes do Material Design)
 - react navigation(componentes para navegação)
 - react native linear gradient(efeito de gradiente)
 - react native icons(pacote de ícones)
 - react redux(integração do redux com o react)
 - redux(gerenciamento de estado reativo)
 - redux-thunk(habilita funções de efeito colateral no redux)
 - react native calendars(componente de calendário)
 - react native gesture handler(habilitar gestos com os dedos)
 - react native action button(componente de botão flutuante)

### Ferramentas de Qualidade

 - CircleCI servidor de integração
 - ESLinter(estilo de código)
 - Prettier(formatador de código)
 - Jest(para os testes)
 - Mkdocs(ferramenta pra gerar documentação)

### Arquitetura
![arquiteura simples do aplicativo](https://raw.githubusercontent.com/daviwesley/ProdTeaApp/master/docs/images/arquitetura.png)

### Estrutura dos arquivos

```bash
.
├── App.js # Ponto de partida do aplicativo
├── assets # Recursos gráficos
│   ├── boy.png
│   ├── calendar.png
│   ├── icons
│   │   ├── award.png
│   │   ├── book.png
│   │   ├── books.png
│   │   ├── calendar.png
│   │   ├── file-empty.png
│   │   ├── list.png
│   │   ├── school-material.png
│   │   └── user3.png
│   ├── maciel.jpeg
│   └── ReactNativeFirebase.png
├── components # Componentes customizados
│   └── MachineTime
│       └── index.js
├── ReactotronConfig.js # Configuração do Reactotron
├── redux # Gerenciamento de estados
│   ├── ducks
│   │   ├── activitiesAction.js
│   │   └── loginAction.js
│   ├── reducers
│   │   └── index.js
│   └── store
│       └── index.js
├── routes # Configuração da navegação entre telas
│   └── index.js
├── screens # Telas
│   ├── ActivityCreator
│   │   └── index.js
│   ├── AgendaHome
│   │   └── index.js
│   ├── Cadastro
│   │   └── index.js
│   ├── Compromissos
│   │   └── index.js
│   ├── Configuracao
│   │   └── index.js
│   ├── Login
│   │   └── index.js
│   ├── Metas
│   │   └── index.js
│   └── Perfil
│       └── index.js
└── styles # Estilos customizados
    └── index.js

```