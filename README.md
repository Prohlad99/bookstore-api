# Bookstore API
This is a RESTful API for managing a bookstore. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on books and authors. It is built using TypeScript, Express, Express Validator, Knex, and MySQL.
## Installation
1.Clone the repository
```bash
git clone https://github.com/Prohlad99/bookstore-api.git
```
2.Install dependencies
```bash
npm install
```
3.Configure database
```bash
make sure you have a database which name is `bookstore`
```
4.Configure environment variables
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=''
DB_NAME=bookstore //if you do not use my database bookstore here you will
                write your database name
PORT=3000
```
5.Run database migrations
```bash
npx knex migrate:latest --knexfile src/db/knexfile.ts
```

# Running the Application

1.Run this command
```bash
npx tsc
```
2.Run the server
```bash
node dist/server.js
```

# Usage
#### `If you want you can use my postman json file given with this repository inside postman file directory`

