const express = require('express');
const cors = require('cors');
const models =require('./models'); // para as operações com as tabelas


const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false})); //ver o que o urlencoded faz

let user=models.User;//importação das models
let tracking=models.Tracking;//importação das models
let product=models.Product;//importação das models


//Criação de Usuários
app.get('/create', async(req,res)=>{
    let create = await user.create({ // o xxx.create, xxx=o nome da variavel que recebe toda a model
        name: "Jane", 
        password: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
     });
     res.send('Usuário criado com sucesso');
});

app.get('/read', async(req,res)=>{
   let read = await user.findAll({raw:true});
   console.log(read);
});





let port= process.env.PORT || 3000; //ver process.env.PORT 
app.listen(port, (req,res)=>{
    console.log('servidor rodando');
});


