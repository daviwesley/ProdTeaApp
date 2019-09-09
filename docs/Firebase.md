# Configurando o Firebase

### Antes de começar
 
- [Faça login no Firebase](https://console.firebase.google.com/)  usando sua Conta do Google.

### Criando o projeto

Primeiramente crie um projeto ao clicar no botão "crie um projeto" no site indicado anteriormente

![enter image description here](dota2.com)

Siga os passos recomendados até a conclusão da criação do projeto 
> pode levar alguns minutos até o projeto está pronto, dependendo da sua conexão da internet

### Configuração do Android
Agora é necessário integrar o Firebase que acabamos de fazer ao nosso projeto android

![enter image description here](dota2.com)

>clique na logo do android para iniciar a integração

logo após clicar no ícone abrirá uma caixa de dialogo para preencher alguns dados

>abrirá a seguinte tela.

![tela de ](dota2.com) 

 - nome do pacote do android
 - apelido do app
 
 O nome do pacote do Android pode ser encontrado no seguinte arquivo `android/app/build.gradle` procure pela chave `applicationID` o valor dessa chave é o nome do pacote do android.
 
 O apelido é opcional mas o recomendado é sempre escolher o mesmo nome do App e finalize o projeto.

Pronto, faça o download do arquivo de configuração `google-services.json` copie esse arquivo para o seguinte caminho `android/app`.
