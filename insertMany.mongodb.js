const database = 'BD3-NoSQL-AtlasMongoDB'
const collection = 'bd3-nosql-atv1'

use(database)

db[collection].insertMany(

[
    {
        "cod_aluno": "12548",
        "cod_turma": "3dsn",
        "nome":"Geovanna Caroline de Souza Gaia",
        "CPF":"12345678910",
        "RG":"987654321",
        "Telefone_aluno":"11912345678",
        "Telefone_responsavel":"11998765432",
        "Email":"geovanna123@gmail.com",
        "Data_nascimento":"20/07/2003"
    },

    {
        "cod_aluno": "57845",
        "cod_turma": "3dsn",
        "nome":"Daniel Kesede Barros de Souza",
        "CPF":"42044975621",
        "RG":"159643855",
        "Telefone_aluno":"11954268795",
        "Telefone_responsavel":"11947856321",
        "Email":"daniel7@gmail.com",
        "Data_nascimento":"12/01/2002"
    },

    {
        "cod_aluno": "14525",
        "cod_turma": "3dsn",
        "nome":"Joao Vitor Andrade de Santana",
        "CPF":"96385274102", 
        "RG":"014785296", 
        "Telefone_aluno":"11978945862", 
        "Telefone_responsavel":"11942516800",
        "Email":"joaoa@gmail.com",
        "Data_nascimento":"05/12/2000"
    },

    {
        "cod_aluno": "98715",
        "cod_turma": "3dsn",
        "nome":"Gabriel Henry Andrade de Melo da Silva",
        "CPF":"15846378246",
        "RG":"043218796",
        "Telefone_aluno":"11936542245",
        "Telefone_responsavel":"11934256127",
        "Email":"henrygab@gmail.com",
        "Data_nascimento":"09/04/2007"
    },

    {
        "cod_aluno": "17485",
        "cod_turma": "3dsn",
        "nome":"Guilherme Simoes da Costa Silva",
        "CPF":"00741775984",
        "RG":"154848845",
        "Telefone_aluno":"11930257846",
        "Telefone_responsavel":"11987845754",
        "Email":"william.simon@gmail.com",
        "Data_nascimento":"02/11/2005"
    },

    {
        "cod_aluno": "78196",
        "cod_turma": "3dsn",
        "nome":"Bruno Santos de Oliveira",
        "CPF":"12623458141",
        "RG":"125114219",
        "Telefone_aluno":"11965125411",
        "Telefone_responsavel":"11952524844",
        "Email":"Brusanoli@gmail.com",
        "Data_nascimento":"30/04/2004"
    },

    {
        "cod_aluno": "87962",
        "cod_turma": "3dsn",
        "nome":"Julia Ferreira Candonara",
        "CPF":"99485446250",
        "RG":"474535152",
        "Telefone_aluno":"11965855472",
        "Telefone_responsavel":"11954474848",
        "Email":"jujutech@gmail.com",
        "Data_nascimento":"07/06/2004"
    },

    {
        "cod_aluno": "14584",
        "cod_turma": "3dsn",
        "nome":"Jose Ricardo Sineide",
        "CPF":"34201789599",
        "RG":"040231412",
        "Telefone_aluno":"11984585422",
        "Telefone_responsavel":"11932324754",
        "Email":"ricarditocatiau@gmail.com",
        "Data_nascimento":"10/08/2005"
    },

    {
        "cod_aluno": "61478",
        "cod_turma": "3dsn",
        "nome":"Samuel Fernandes Brito",
        "CPF":"15147241789",
        "RG":"023485792",
        "Telefone_aluno":"11978456241",
        "Telefone_responsavel":"11934685855",
        "Email":"neysantos@gmail.com",
        "Data_nascimento":"23/10/2003"
    },

    {
        "cod_aluno": "12574",
        "cod_turma": "3dsn",
        "nome":"Marcos Costa Nogueira Luis do Saiz",
        "CPF":"62604789477",
        "RG":"104369784",
        "Telefone_aluno":"11948752463",
        "Telefone_responsavel":"11988747842",
        "Email":"mcnlstech@gmail.com",
        "Data_nascimento":"05/04/1004"
    }
]
)