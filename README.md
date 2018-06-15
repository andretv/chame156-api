# chame156 API

##### Pre-requisitos:

- Docker

- Node

---

##### How To:

1. Abra o terminal no diretorio do projeto e rode `npm install`.

2. Com o docker inicializado, rode o comando `docker-compose up --build`.

3. Abra um segundo terminal e execute `docker exec -it 156-api bash`.

4. Dentro do container Docker execute `npm run reset:db`.

---

##### END-POINTS

| END-POINT          | METHOD | RESPONSE                                  |
|:------------------ | ------ | ----------------------------------------- |
| /user              | GET    | Todos os usuários do sistema.             |
| /user/:cpf         | GET    | Um usuário expecifico.                    |
| /user/:cpf/tickets | GET    | Todos os tickets referentes a um usuário. |
| /user              | POST   | Usuário criado.                           |
| /user/auth         | POST   | Caso autenticado, retorna o usuário.      |
| /user/:cpf         | PATCH  | Usuário atualizado.                       |
| /user              | DELETE | CPF do usuário deletado.                  |

| END-POINT   | METHOD | RESPONSE                     |
| ----------- | ------ | ---------------------------- |
| /ticket     | GET    | Todos os tickets do sistema. |
| /ticket/:id | GET    | Um ticket expecífico.        |
| /ticket     | POST   | Ticket criado.               |
| /ticket     | PATCH  | Ticket atualizado.           |
| /ticket     | DELETE | ID do ticket deletado.       |










