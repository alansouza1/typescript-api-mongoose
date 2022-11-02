# Sobre o Projeto

Neste projeto foi desenvolvida uma _API_, utilizando _TypeScript_.

No projeto foram aplicados os princípios de Programação Orientada a Objetos(**POO**) para a construção de uma API com **CRUD** para gerenciar uma concessionária de veículos. Isso será feito utilizando o banco de dados **MongoDB** .

O projeto foi desenvolvido utilizando as camadas _Models_, _Services_ e _Controllers_(_MSC_).

Foram criados alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o ODM Mongoose.

Foram feitos alguns testes testes unitários nas três camadas utilizando as ferramentas _Mocha_, _Chai_ e _Sinon_.

# Rodando o Projeto

### Requisitos:
- Node.js 16
- Docker
- Docker Compose

Depois de clonar o repositório instale as dependências do npm com o comando:
```
npm install
```
Inicie o docker utilizando o comando:
```
docker-compose up -d
```
Para executar os testes unitários rode o comando:
```
docker exec -it car_shop npm run test:dev
```
E por fim, inicie o servidor back-end com o comando:
```
docker exec -it car_shop npm run dev
```