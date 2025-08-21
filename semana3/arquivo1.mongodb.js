/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS */
const database = 'BD3-AULA';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS */
const collection = 'LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* seleciona documentos com uso do operador maior $gt */
//db['LIVRARIA'].find({valor: {$gt: 100}});

//db['LIVRARIA'].find({valor: {$lt: 100}});


/* DEFININDO INTERVALO ENTRE VALORES */
// db[collection].find({
//     valor: {$gte: 100, $lt: 150 }
// }).sort({valor: -1}); // ORDEM DECRESCENTE

/* OPERADOR LOGICO AND: */
// db['LIVRARIA'].find({$and: [
//     { categoria: {$eq: 'Fantasia Heroica' }},
//     { valor: {$lte: 100 } }
// ] })

/* OPERADOR LOGICO OR: */
// db['LIVRARIA'].find({$or: [
//     {categoria: {$eq: 'Fantasia Heroica' } },
//     {valor: {$lte: 100 }}
// ]})

/* selecao de documentos ocm uso do operador $in */
db[collection].find({
    autor:{
        $in:['J.R.R Tolkien','Isaac Asimov']
    },
},
{_id:0,codigo:0,descricao:0}).sort({valor:1})
