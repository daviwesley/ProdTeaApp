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
$ sudo pip install pipenv
```

logo depois de executar esse comando certifique-se que você esteja dentro da pasta do projeto e execute o seguinte comando

```bash
$ pipenv shell
```

### Acessar o site o gerado

Para acessar o site gerado pelo `mkdocs` execute o seguinte comando no terminal

```bash
$ mkdocs serve
```
### Fazer o deploy no github

Para que esse site gerado seja disponibilizado online iremos utilizar o github pages, que oferece um servidor para hospedar as nossas páginas `html`, para fazer isso rode o seguinte comando no terminal

```bash
$ mkdocs gh-deploy
```
logo após esse comando ele disponibilizará a url para acessar o site da documentação online 
