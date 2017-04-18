# EngSoft-2017-1

## Configurando o Ambiente

[Vagrant](https://www.vagrantup.com/) é uma ferramenta para o gerenciamento de
ambientes virtuais. Não se trata de um provedor de máquinas virtuais, tal como
o [VirtualBox](https://www.virtualbox.org/), mas sim de uma funcionalidade
para a geração e a manutenção de máquinas que serão disponibilizadas por alguma
ferramenta de virtualização. No caso deste trabalho, o ambiente foi configurado
utilizando-se do VirtualBox.

Este _setup_ destina-se à criação de ambientes para o desenvolvimento em C/C++.
Ele utiliza uma imagem [Ubuntu](http://www.ubuntu.com/) [distribuída pela
Hashicorp](https://atlas.hashicorp.com/ubuntu/boxes/precise64),
desenvolvedora do Vagrant.

No seu sistema nativo (Linux, MacOSX, Windows, ...) é necessário instalar o
Vagrant e um provedor de VM's, como o VirtualBox.  Depois de instalados, [este
projeto](https://github.com/LorenaLunelli/SO-2017-1.git) deve estar no
diretório raiz da máquina
virtual que se deseja criar. Isto porque os arquivos ```Vagrantfile``` e
```bootstrap.sh``` serão os responsáveis pelas configurações do ambiente. Neste
diretório, execute:

```bash
vagrant up
```

Isto fará o download da imagem da máquina virtual, se você não a tem ainda, e a
colocará para rodar com as configurações necessárias. Para acessar a máquina,
execute:

```bash
vagrant ssh
```

O sincronismo entre os arquivos da sua máquina e os da máquina virtual é feito
através do diretório ```/vagrant``` da VM, que corresponte à raiz do seu
projeto. Para sair da máquina, digite ```exit```. Para suspendê-la, execute:

```
vagrant suspend
```

e para desativá-la:
```bash
vagrant halt
```

Finalmente, para destruir a máquina, execute:
```bash
vagrant destroy
```
A lista completa de comandos pode ser encontrada
[aqui](https://www.vagrantup.com/docs/cli/).


## Ativando o projeto

TODO: Falar sobre Node.js, npm install


## REST APIs

API (Application Public Interface) é uma maneira de acessar uma aplicação
externa. O termo é aplicado para funções do sistema operacional, bibliotecas,
serviços web, e muitos outros. O modelo REST (REpresentational State
Transfer) se baseia nos [verbos HTTP](http://www.restapitutorial.com/lessons/httpmethods.html),
e segue a filosofia de que o servidor de aplicação não guarda o estado do
serviço. Assim, no nosso caso, uma listagem de quartos retorna valores de
quartos. O cliente, sabendo dos quartos disponíveis, requisita informações
sobre um quarto específico dentre os listados. Para o servidor, não faz a
menor diferença se o cliente obteve os valores possíveis antes ou esta é
a primeira requisição que é feita.


Dentre os verbos HTTP, iremos utilizar principalmente GET e POST.


* GET: A requisição que o browser faz para um servidor web comumente é o GET.
Com ela se requisitam dados. Um exemplo, no nosso caso, é colocar no browser
(com o servidor funcionando) a seguinte URL:

```http://127.0.0.1:4568/listRooms```


Ou, com o uso do programa [cURL](https://curl.haxx.se/):

```curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://127.0.0.1:4568/listRooms```


## Front-end stack


TODO: explicar sobre Vue.js


## Referências

[Referência básica e simples para uma REST API com Node.js](https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm)


