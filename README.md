# Trabalho de GCC129 - Sistemas Distribuidos

## ApiRest - ToDoList
#### Professor: Neumar Costa Malheiros
Alunos: Lucas Silvério e Vinicius Abreu

Para executar o código é necessário a instalação das dependências utilizando o gerenciador de pacotes de sua preferência:
- npm install
- yarn

Após a instalação, é necessário também que se tenha o nodemon instalado na máquina, caso não tenha, basta executar algum dos comandos:
- npm install -g nodemon
- yarn global add nodemon

Agora que o ambiente está preparado, basta executar:
- nodemon index.js
##### E a aplicação estará online no localhost:3000.
##### Caso a porta 3000 esteja ocupada, basta ir à linha 36 do index.js e alterar a porta em questão.

A aplicação também está online no servidor: https://ws-apiresttodolist.herokuapp.com/

### Rotas Disponíveis:
- Get /tarefas: retornar uma lista com todas as tarefas.
```
Status 200: Sucesso ao obter as tarefas;
Status 204: Não existe tarefa cadastrada;
Status 500: Falha do servidor ao obter as tarefas.
```
- Get /tarefas/{identificador}: retornar a tarefa correspondente ao identificador.
```
Status 200: Sucesso ao obter a tarefa;
Status 400: Não foi possível encontrar o identificador.
```
- Post /tarefas: incluir uma tarefa; Os dados da tarefa devem ser passados no corpo da requisição HTTP no seguinte formato:
```
{
	"descricao": String,
	"prazo": Date no formato ISO,
	"completa": Boolean
}
```
```
Status 200: Sucesso ao cadastrar a tarefa;
Status 400: Bad request, todos os campos do body devem ser preenchidos.
```
- Delete /tarefas/{identificador}: excluir a tarefa correspondente ao identificador.
```
Status 200: Sucesso ao deletar a tarefa;
Status 400: Não foi possível encontrar o identificador.
```
- Put /tarefas/{identificador}: alterar os dados da tarefa correspondente ao identificador; Os novos dados devem ser passados no corpo da requisição HTTP no seguinte formato:
```
{
	"descricao": String,
	"prazo": Date no formato ISO,
	"completa": Boolean
}
```
```
Status 200: Sucesso ao alterar a tarefa;
Status 400: Não foi possível encontrar o identificador.
```
