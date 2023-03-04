# Desafio Angular Ailos

### Instalação
Para executar o projeto, após feito o clone do repositório, é necessário realizar a instalação dos módulos utilizando o NPM (Node Package Manager).
Caso o NPM já esteja instalado na máquina, basta executar em um terminal o prompt de comando o comando:
``npm install``
e então as dependências do projeto serão instaladas.

### Execução
Após instaladas as dependências do projeto, para executar o mesmo basta utilizar o comando:
``ng serve``
E então será aberto um servidor rodando na porta 4200. Para acessar o projeto basta abrir seu navegador e digitar:
``localhost:4200``
Assim o projeto será executado.

### Uso do projeto

Foram desenvolvidas algumas páginas, porém somente duas realmente foram concluídas. As páginas concluídas se referem ao Desafio Proposto.
Para acessar a página referente ao desafio, basta clicar no ícone de uma lupa na barra de navegação à esquerda (segundo ícone) ou acessar `localhost:4200/consulta` que a página surgirá.

Existe somente uma Pessoa cadastrada no banco em memória na aplicação, o CPF fictício cadastrado é o 518.225.453-90. Esse é o CPF que deve ser utilizado para consulta.

O projeto foi desenvolvido em um monitor 1080p e ainda existem alguns pontos refente a responsividade a se consertar, porém pode ser executado tranquilamente em telas 720p.

### Percurso de Desenvolvimento (Para Devs)
Durante a criação dos componentes e páginas, fiz o uso do router-outlet para reutilizar a barra de navegação (esta forma de navegação está presente em commits antigos). Porém, mais ao final do projeto decidi transformar tudo em componente, para facilitar o reúso e envio de informações entre componentes. A estrutura dos commits mais recentes se diferem bastante dos mais antigos.

### Autor
Raí Rafael Santos Silva 
Email: rairafaelss@gmail.com
![Foguete](/src/assets/rocket.png)