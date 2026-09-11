# Escopo do Projeto — Pokédex de Times de Futebol

## 1. Objetivo e Visão Geral

O projeto consiste no desenvolvimento de uma **Pokédex de times de futebol brasileiro**, permitindo que usuários consultem informações sobre clubes de futebol de forma organizada.

O usuário poderá **criar uma conta, fazer login e escolher seus times favoritos**. Após o login, poderá acessar informações dos clubes escolhidos, como **história, jogadores, títulos e estatísticas**.

A aplicação será desenvolvida inicialmente como uma **API**, responsável por armazenar e disponibilizar os dados dos usuários, times e favoritos.

---

# 2. Requisitos Funcionais

* **RF001 — Cadastro de Usuário:** o sistema deve permitir o cadastro de novos usuários.
* **RF002 — Login:** o sistema deve permitir que usuários cadastrados façam login.
* **RF003 — Cadastro de Times:** o sistema deve permitir cadastrar times de futebol brasileiro.
* **RF004 — Listagem de Times:** o sistema deve permitir consultar todos os times cadastrados.
* **RF005 — Consulta de Time:** o sistema deve permitir consultar as informações de um time específico.
* **RF006 — Times Favoritos:** o usuário deve poder adicionar times à sua lista de favoritos.
* **RF007 — Remover Favoritos:** o usuário deve poder remover times da sua lista de favoritos.
* **RF008 — Listar Favoritos:** o usuário deve poder consultar seus times favoritos.
* **RF009 — Informações dos Times:** o sistema deve armazenar e disponibilizar informações como história, jogadores, títulos e estatísticas.
* **RF010 — Administração:** administradores poderão cadastrar, editar e excluir informações dos times.

---

# 3. Requisitos Não Funcionais

* **RNF001 — Back-end:** o sistema deverá ser desenvolvido utilizando **Node.js e Express**.
* **RNF002 — Banco de Dados:** deverá ser utilizado **PostgreSQL**.
* **RNF003 — ORM:** o banco deverá ser manipulado utilizando **Drizzle ORM**.
* **RNF004 — Arquitetura:** o projeto deverá possuir uma estrutura modular, separando rotas, controllers, serviços, schemas e banco de dados.
* **RNF005 — Segurança:** as senhas dos usuários deverão ser armazenadas utilizando **hash**, nunca em texto puro.
* **RNF006 — Autenticação:** as rotas que exigirem usuário logado deverão possuir autenticação.
* **RNF007 — Validação:** os dados enviados para a API deverão ser validados antes de serem armazenados.
* **RNF008 — API REST:** os endpoints deverão seguir padrões REST.
* **RNF009 — Documentação:** a API deverá ser documentada utilizando **Swagger/OpenAPI**.
* **RNF010 — Deploy:** o sistema deverá ser preparado para publicação utilizando o **Render**.
* **RNF011 — Versionamento:** o projeto deverá utilizar **Git e GitHub** para controle do código.
* **RNF012 — Variáveis de Ambiente:** informações sensíveis, como credenciais do banco e chaves secretas, deverão ser armazenadas em variáveis de ambiente.

---

## 4. Principais Recursos da Primeira Versão

A primeira versão do sistema deverá priorizar:

1. Cadastro e login de usuários;
2. Cadastro e consulta de times;
3. Sistema de times favoritos;
4. Cadastro de informações básicas dos times;
5. Banco de dados PostgreSQL;
6. API REST com Node.js e Express;
7. Autenticação e segurança;
8. Documentação da API com Swagger.

# 5. Modelagem de Casos de Uso

## UC001: Criar Conta

- **Ator:** Usuário
- **Página:** Cadastro
- **Fluxo:** O usuário informa nome, e-mail e senha. O sistema valida os dados e cria sua conta.

## UC002: Fazer Login

- **Ator:** Usuário
- **Página:** Login
- **Fluxo:** O usuário informa suas credenciais. Se estiverem corretas, o sistema realiza a autenticação e direciona para a página inicial.

## UC003: Visualizar Times

- **Ator:** Usuário
- **Página:** Lista de Times
- **Fluxo:** O usuário visualiza os times cadastrados, pode pesquisar um clube e acessar sua página de informações.

## UC004: Visualizar Time

- **Ator:** Usuário
- **Página:** Detalhes do Time
- **Fluxo:** O sistema apresenta informações do clube, como história, jogadores, títulos e estatísticas.

## UC005: Gerenciar Favoritos

- **Ator:** Usuário
- **Página:** Favoritos
- **Fluxo:** O usuário pode adicionar ou remover times dos favoritos. Os clubes escolhidos ficam disponíveis em sua área personalizada.

## UC006: Gerenciar Times

- **Ator:** Administrador
- **Página:** Painel Administrativo
- **Fluxo:** O administrador pode cadastrar, editar e excluir times e suas informações.

---

# 6. Páginas Principais

A primeira versão do sistema terá:

- **Login** — autenticação do usuário.
- **Cadastro** — criação de uma conta.
- **Página Inicial** — exibição dos times favoritos.
- **Lista de Times** — pesquisa e seleção de clubes.
- **Detalhes do Time** — história, jogadores, títulos e estatísticas.
- **Favoritos** — gerenciamento dos times escolhidos.
- **Painel Administrativo** — gerenciamento dos dados dos times.

## Fluxo Principal

**Cadastro → Login → Página Inicial → Lista de Times → Detalhes do Time → Favoritos**