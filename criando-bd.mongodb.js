/* criacao da constante que representa o nome do banco de dados */
const database = 'bd3-aula';

/* criacao da constante que representa o nome da coleção de arquivos */
const collection = 'livraria';

/* define o banco de dados que sera utilizado, caso nao existe sera criado */
use(database);
//funcao do mongodb for vscode

/* cria uma colecao de dados */
db.createCollection(collection);
