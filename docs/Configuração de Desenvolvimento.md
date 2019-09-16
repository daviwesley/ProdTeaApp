## Configuração de Desenvolvimento

Para desenvolver o aplicativo precisamos que algumas ferramentas estejam instaladas que são elas:

- Java 8
- Xcode(só se for desenvolver para iOS)
- Nodejs
- cli do react native
- VS Code(opcional mas tem uma boa integração com o ambiente de desenvolvimento JavaScript)
- Genymotion ou qualquer outro emulador

Existe um tutorial da Rocketseat que tem mais detalhes de como configurar o ambiente de desenvolvimento siga o tutorial deles nesse [link](https://docs.rocketseat.dev/ambiente-react-native/introducao)

### Como gerar a documentação

A documentação se encontra na pasta `docs` onde contém arquivos com a extensão `.md` ou seja usa marcação chamada `mardown`, então todos os arquivos devem usa-lo para que o `mkdocs` consiga gerar o site da documentação

### Instalando o Mkdocs

Primeiramente você precisa que o `python` esteja instalado em sua máquina e também a ferramenta `pip` que é o gerenciador de pacotes do python, com essas ferramentas instaladas execute os seguintes comandos

!!! info
    Voçê pode encontrar o instalador do python no [portal](https://www.python.org/downloads/) oficial

```bash
sudo pip install pipenv
```

logo depois de executar esse comando certifique-se que você esteja dentro da pasta do projeto e execute o seguinte comando

```bash
pipenv shell
```
```bash
pipenv install
```
!!! info
    Esse comando só precisa ser executado uma única vez porque ele instala as dependencias do Mkdocs
    
### Acessar o site o gerado

Para acessar o site gerado pelo `mkdocs` execute o seguinte comando no terminal

```bash
mkdocs serve
```
### Fazer o deploy no github

Para que esse site gerado seja disponibilizado online iremos utilizar o github pages, que oferece um servidor para hospedar as nossas páginas `html`, para fazer isso rode o seguinte comando no terminal

```bash
mkdocs gh-deploy
```
logo após esse comando ele disponibilizará a url para acessar o site da documentação online 

### Configurando o Firebase

#### Antes de começar
 
- [Faça login no Firebase](https://console.firebase.google.com/)  usando sua Conta do Google.

### Criando o projeto

Primeiramente crie um projeto ao clicar no botão "crie um projeto" no site indicado anteriormente

![enter image description here](https://raw.githubusercontent.com/daviwesley/ProdTeaApp/master/docs/images/tutorial.png)

Siga os passos recomendados até a conclusão da criação do projeto 
> pode levar alguns minutos até o projeto está pronto, dependendo da sua conexão da internet

### Configuração do Android
Agora é necessário integrar o Firebase que acabamos de fazer ao nosso projeto android

![enter image description here](https://raw.githubusercontent.com/daviwesley/ProdTeaApp/master/docs/images/android.png)

>clique na logo do android para iniciar a integração

logo após clicar no ícone abrirá uma caixa de dialogo para preencher alguns dados

>abrirá a seguinte tela.

![tela de ](https://raw.githubusercontent.com/daviwesley/ProdTeaApp/master/docs/images/registrarApp.png) 

 - nome do pacote do android
 - apelido do app
 
 O nome do pacote do Android pode ser encontrado no seguinte arquivo `android/app/build.gradle` procure pela chave `applicationID` o valor dessa chave é o nome do pacote do android.

 ![tela de ](https://raw.githubusercontent.com/daviwesley/ProdTeaApp/master/docs/images/aplicationID.png)
 
 O apelido é opcional mas o recomendado é sempre escolher o mesmo nome do App e finalize o projeto.

Pronto, faça o download do arquivo de configuração `google-services.json` copie esse arquivo para o seguinte caminho `android/app`.

