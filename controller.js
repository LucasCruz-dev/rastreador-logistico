const express = require('express');
const cors = require('cors');
const models =require('./models'); // para as operações com as tabelas


const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false})); //ver o que o urlencoded faz
app.use(express.json()) // configura para aceitar o json vindo do front 
let user=models.User;//importação das models
let tracking=models.Tracking;//importação das models
let product=models.Product;//importação das models

app.post('/login', async (req,res)=>{
    let response = await user.findOne({
        where:{name: req.body.name, password: req.body.password}
    });
    console.log(response);
});



let port= process.env.PORT || 3000; //ver process.env.PORT 
app.listen(port, (req,res)=>{
    console.log("ok");
});


