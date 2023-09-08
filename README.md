# PETCARE
 ## Projeto Integrador SENAC

 ### Este é um projeto em que o principal objetivo da aplicação é selecionar cuidadores de pets para fazer tratamento de beleza nos animais. Realizado pelos alunos da turma de ADS do 5º SEMESTRE - EAD 2021 - SENAC, cujo os alunos são: 
 Grupo 19
 * Pedro Lucas Moraes de Sousa Rosa
 * Yara Guedes Lopes
 * Leonardo Teixeira 
 * Leonardo Bertaia

### Apresentação do APP

Uma apresentação feita em video e salva no seguinte link do youtube:

https://www.youtube.com/watch?v=1BLgUOzFq4Y

A protipação feita está disponibilizada através do link a seguir:

https://www.figma.com/file/yde2F2vzVPVG3vk9TUOgvs/PETCARE?type=design&node-id=0%3A1&mode=design&t=Yvb9HQ0iBSLeqWqE-1

### As tecnologias utilizadas foram: 
Stack   | Versão
--------- | ------
FIGMA | 116.6.3
VSCODE | 1.76.1
REACT NATIVE | 18.1.0
METRO | 0.76.7
ANDROID STUDIO | 2022.1.1 Patch 1

### Como rodar a aplicação:

1. Necessário abrir o ANDROID STUDIO. 

2. Configurar um emulador de Android e instala-lo. 

     2.1. https://developer.android.com/studio/run/emulator?hl=pt-br

3. Rodar no promtp o comando: npx react-native run-android

4. Seguir o fluxo da abertura no emulador do android. 

6. Após o termino do fluxo, o mesmo irá abrir a aplicação no emulador corretamente.


**Obs.: É necessário sempre rodar a aplicação na pasta em que estão todos os outros arquivos.**
**Obs.: Esta aplicação utiliza requisições de um webservice de terceiros, no qual geram FOTOS, NOME, NOME DE SERVICOS e PRECOS aleatoriamente. Também é utilizada a CONSULTA DE USUARIO CADASTRADO e CADASTRO no mesmo webservice.**


### Como utilizar a aplicação:
É possivel utilizar a aplicação cadastrando um novo usuário e/ou usuário já cadastrado. A aplicação é bem simples e interativa, onde o fluxo da navegação entre as telas é fácil e segue a lógica de um agendamento de serviço.  

Tela  | Descrição
--------- | ------
LOGIN | Nesta tela possuimos o inicio da aplicação onde é possivel logar e/ou clicar para cadastrar um novo login. 
CADASTRO | Nesta tela possuimos o cadastro um novo login. 
HOME | Nesta tela possuimos uma lista de todos os cuidadores disponiveis, assim seu nome, pontuação, foto e botão de perfil. Também possuimos um campo de localização, que solicita a permissão no android para verificar a localização. Ao clicar no botão VER PERFIL, ele irá redirecionar para a pagina de serviços do cuidador. É possivel também navegar entre as telas na TOOLBAR customizada, onde se encontram todas as telas da aplicação: HOME, SEARCH, APPOINTMENTS, FAVORITES e PROFILE. 
SEARCH | Nesta tela possuimos uma lista de todos os cuidadores disponiveis, assim seu nome, pontuação, foto e botão de perfil. Voce pode pesquisar pelo seu cuidador de prefencia.  
SERVICES | Nesta tela possuimos a lista de serviços do cuidador, assim como o botão de agendamento, foto do cuidador, serviço e preço. Também é possivel ver o TESTIMONIAL passando automaticamente abaixo das listas. Nesta tela também é possivel favoritar o seu cuidador. 
APPOINTMENTS | Nesta tela possuimos todos os agendamentos com os cuidadores que já foram realizados e/ou irão ser realizados. 
FAVORITES | Nesta tela possuimos todos os cuidadores marcados como FAVORITO na tela HOME.
PROFILE | Nesta tela temos um bem vindo ao usuário logado e um botão de LOGOUT.  

 
