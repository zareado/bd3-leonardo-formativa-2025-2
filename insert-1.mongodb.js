/* criacao da constante que representa o nome do banco de dados */
const database = 'bd3-aula';

/* criacao da constante que representa o nome da coleção de arquivos */
const collection = 'livraria';

/* define o banco de dados que sera utilizado, caso nao existe sera criado */
use(database);

// exemplo de insercao com insertOne:
db['livraria'].insertOne(
    {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg",
      "valor": 120,
      "categoria":"Ficção Científica"
    }
);