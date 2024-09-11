const database = 'BD3-NoSQL-AtlasMongoDB'
const collection = 'bd3-nosql-atv1'

use(database)

db[collection].find(
    {"CPF":/62604789477/i},
    {"cod_aluno": 0}
);