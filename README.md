# Trabalho_Engenharia_Software

## Objetivo

A aplicação que será desenvolvida tem como objetivo fornecer uma plataforma de gestão e estudo de materiais digitais de diferentes formatos, focando na organização de materiais como livros, anotações e exercícios. Os usuários poderão fazer upload de seus arquivos, categorizá-los por módulos e acessar conteúdos de forma intuitiva. Entre as principais funcionalidades, a plataforma permitirá o upload de arquivos de diferentes formatos, divisão dos arquivos em módulos, marcação de arquivos com tags e filtragem dos arquivos submetidos. Além disso, será possível adicionar bookmarks em páginas de interesse em PDFs, fazer anotações e destacar trechos importantes nos documentos. A plataforma contará com um sistema de revisão baseado em flashcards, permitindo que os usuários criem resumos a partir das anotações feitas. Para facilitar a organização, os usuários poderão pesquisar rapidamente termos dentro dos materias e contar com filtros avançados para identificar conteúdos anotados. Os materiais poderão ser compartilhados com outras pessoas, tornando a plataforma um ambiente colaborativo para estudo. Além disso, haverá a possibilidade de criar grupos de estudo, onde usuários poderão trocar arquivos, discutir conteúdos e compartilhar anotações de forma estruturada, enriquecendo ainda mais a experiência de aprendizado.

## Membros da Equipe

- Lucas André dos Santos (2022093032) [ FrontEnd ] @lucasandreds 
- Mateus Vitor Mota Vasconcelos (2022043280) [ Fullstack ] @mateusvmv
- Pedro loures Alzamora (2020006949) [ BackEnd ] @pedro-loures
- Rainer Menezes Vieira Silva (2017068785) [ Fullstack ] @RainerM10

## Tecnologias utilizadas

- Linguagem: JavaScript
- Frameworks: Express.js e Pico.css
- Bibliotecas importantes: Handlebars e HTMX
- Banco de dados: SQLite

## Backlog do Produto

- [ ] Como usuário, eu gostaria de ter uma conta pessoal
- [ ] Como usuário, eu gostaria de gerenciar arquivos
- [ ] Como usuário, eu gostaria de criar anotações e artigos
- [ ] Como usuário, eu gostaria de criar exercícios e revisões
- [ ] Como usuário, eu gostaria de categorizar os documentos e buscar por categoria
- [ ] Como usuário, eu gostaria de ver arquivos em diferentes formatos
- [ ] Como usuário, eu gostaria de adicionar bookmarks e destacar trechos
- [ ] Como usuário, eu gostaria de fazer buscas com vários filtros
- [ ] Como usuário, eu gostaria de fazer buscas no conteúdo dos documentos
- [ ] Como usuário, eu gostaria de compartilhar meus documentos
- [ ] Como usuário, eu gostaria de fazer grupos de estudo com discussões

## Primeira Sprint

### Iniciais
A configuração inicial do projeto
- [ ] Criar o projeto node, instalar as libs sqlite3, express, handlebars, configurar typescript
- [ ] Criar um layout inicial em HTML com as libs
- [ ] Criar uma página inicial usando o layout
- [ ] Criar um backend inicial com código para migrações do banco de dados


### [Como usuário, eu gostaria de ter uma conta pessoal](https://github.com/lucasandreds/Trabalho_Engenharia_Software/issues/2)
O usuário deve poder se identificar para ver seus documentos.
- [ ] Atribuir um cookie de sessão para cada usuário que acessar o site
- [ ] Associar sessões a usuários
- [ ] Criar uma página de login
- [ ] Criar um endpoint de login
- [ ] Criar uma página de registro
- [ ] Criar um endpoint de registro
- [ ] Criar um endpoint de logout

### [Como usuário, eu gostaria de gerenciar arquivos](https://github.com/lucasandreds/Trabalho_Engenharia_Software/issues/1)
O usuário deve poder gerenciar arquivos, fazer upload, vê-los, baixar e removê-los.
- [ ] Exibir arquivos do usuário na página principal
- [ ] Criar uma página para upload de arquivo
- [ ] Criar um endpoint para upload de arquivo
- [ ] Criar uma página para edição de arquivo
- [ ] Criar um endpoint para edição de arquivo
- [ ] Criar um endpoint para remoção de arquivo

### [Como usuário, eu gostaria de criar anotações e artigos](https://github.com/lucasandreds/Trabalho_Engenharia_Software/issues/4)
O usuário deve poder criar anotações, editá-las e removê-las.
- [ ] Exibir anotações do usuário na página principal
- [ ] Criar uma página para criação de anotação
- [ ] Criar um endpoint para criação de anotação
- [ ] Criar uma página para edição de anotação
- [ ] Criar um endpoint para edição de anotação
- [ ] Criar um endpoint para remoção de anotação

### [Como usuário, eu gostaria de criar exercícios e revisões](https://github.com/lucasandreds/Trabalho_Engenharia_Software/issues/3)
O usuário deve poder criar e fazer exercícios, editá-los e removê-los.
- [ ] Exibir exercícios do usuário na página principal
- [ ] Criar uma página para criação de exercício
- [ ] Criar um endpoint para criação de exercício
- [ ] Criar uma página para edição de exercício
- [ ] Criar um endpoint para edição de exercício
- [ ] Criar uma página para realização de exercício
- [ ] Criar uma página para resultado de exercício
- [ ] Criar um endpoint para resultado de exercício
- [ ] Criar um endpoint para remoção de exercício