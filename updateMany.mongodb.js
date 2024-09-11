const database ='BD3-NoSQL-AtlasMongoDB'
const collection = 'bd3-nosql-atv1'

use(database)

db[collection].updateOne(
    {nome:'Guilherme Simoes da Costa Silva'}, 
    { $set:{nome:'Guilherme Simoes da Costa', RG:'154848869', CPF:'78741775984'}}
     
       
    
)

