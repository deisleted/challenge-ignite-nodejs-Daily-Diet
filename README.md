<h1 align="center">
  Projeto NodeJS Daily Diet API
</h1>

<p align="center">
  <a>🖥️ Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>📝 Estruturas das Tasks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a>🧭 Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

</p>



## 💻 Projeto

O **Projeto NodeJS** da Rocketseat é uma especialização em NodeJS e nesse desafio desenvolvi uma API para controle de dieta diária, a Daily Diet API.

A API contém as seguintes funcionalidades:

- Deve ser possível registrar uma refeição feita, com as seguintes informações:
    *As refeições devem ser relacionadas a um usuário.*
    
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- Deve ser possível apagar uma refeição
- Deve ser possível listar todas as refeições de um usuário
- Deve ser possível visualizar uma única refeição



### 📝 Estrutura de uma task:

- `id` - Identificador único gerado automaticamente.
- `title` - Título da refeição.
- `description` - Descrição detalhada da refeição.
- `date` - Data de quando a refeição foi realizada.
- `hour` - Horas de quando a refeição foi realizada.
- `dietOrNot` - Está dentro ou não da dieta.

### 🧭 Rotas

- `POST - /add`: é possível criar registros de dietas no banco de dados, enviando todos os campos por meio do `body` da requisição.   
    
- `GET - /diets/?filter=`: Deve ser possível listar todos os registros de dieta salvas no banco de dados. Também é possível realizar uma busca, filtrando por qualquer informação do banco de dados.
    
- `PUT - /edit/?id=`: é possível  lterar qualquer informação de um registro de dieta, passar no body da requisicao em json as informações que deseja editar e o id passada na url.
    
    
- `DELETE - /delete/?id=`: Deletar registro de dieta especifica conforme id passado na url.
    

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- Nodejs
- Knex (SQLITE)
