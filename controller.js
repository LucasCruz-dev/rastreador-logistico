const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false})); //ver o que o urlencoded faz

let port= process.env.PORT || 3000; //ver process.env.PORT 
app.listen(port, (req,res)=>{
    console.log('servidor rodando');
});


