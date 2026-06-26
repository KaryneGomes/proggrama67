const express = require("express");
const cors = require("cors");

const db = require("./config/database");


const app = express();


app.use(cors());

app.use(express.json());


app.use(
"/usuarios",
require("./routes/usuarioRoutes")
);


app.use(
"/manifestacoes",
require("./routes/manifestacaoRoutes")
);


app.use(
"/respostas",
require("./routes/respostaRoutes")
);



db.sync()
.then(()=>{

console.log("Banco criado");


app.listen(3000,()=>{

console.log("Servidor rodando na porta 3000");

});

});