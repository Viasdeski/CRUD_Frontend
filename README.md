# Sistema de Gerenciamento de Pessoas

Este é um sistema de gerenciamento de pessoas desenvolvido em JavaScript, que permite realizar operações CRUD (Create, Read, Update, Delete) em uma lista de pessoas cadastradas.

## Descrição do Problema

O objetivo deste sistema é oferecer funcionalidades para o cadastro, atualização, deleção e listagem de pessoas. Abaixo estão as especificações das funções principais a serem implementadas:

### Cadastro (Create)
A função `cadastrarPessoa` recebe um objeto representando uma pessoa (com campos como "nome", "idade", "cidade", etc.) e a adiciona à lista de pessoas cadastradas.

### Atualização (Update)
A função `atualizarPessoa` recebe um ID e um objeto com campos a serem atualizados. Ela deve encontrar a pessoa com o ID correspondente na lista e atualizar os campos especificados.

### Deleção (Delete)
A função `deletarPessoa` recebe um ID e remove a pessoa correspondente da lista de pessoas cadastradas.

### Listagem (Read)
A função `listarPessoas` retorna a lista atual de pessoas cadastradas.

## Funcionamento do Sistema

O sistema utiliza um array de objetos em memória para armazenar as informações das pessoas cadastradas. As funções principais são responsáveis por manipular esse array de acordo com as operações CRUD requisitadas.

## Como Utilizar

Para utilizar este sistema, basta chamar as funções correspondentes às operações desejadas, passando os parâmetros necessários conforme descrito acima.

## Funcionamento do Sistema
Decidi desafiar-me e explorar novos conceitos que ainda não foram abordados em sala de aula, optando por implementar a atividade utilizando programação orientada a objetos (O.O). Nesse contexto, cada operação CRUD é representada por métodos de uma classe principal. O array de objetos em memória é encapsulado dentro desta classe, promovendo uma abordagem mais estruturada e modular do sistema. Esses métodos principais são responsáveis por manipular o array de acordo com as operações CRUD requisitadas, proporcionando uma organização mais eficiente e facilitando a manutenção e extensão do código.
