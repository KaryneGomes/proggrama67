const Usuario = require("../models/Usuario");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


// CADASTRO

exports.cadastrar = async(req,res)=>{

try{


let {nome,email,senha,tipoUsuario}=req.body;



let existe = await Usuario.findOne({

where:{
email
}

});


if(existe){

return res.status(400).json({

erro:"Email já cadastrado"

});

}



senha = await bcrypt.hash(senha,10);



let usuario = await Usuario.create({

nome,

email,

senha,

tipoUsuario

});



res.json({

mensagem:"Usuário criado",

usuario

});



}catch(error){

res.status(500).json({

erro:error.message

});

}


}



// LOGIN


exports.login = async(req,res)=>{


try{


const {email,senha}=req.body;



const usuario = await Usuario.findOne({

where:{
email
}

});



if(!usuario){

return res.status(404).json({

erro:"Usuário não encontrado"

});

}




const senhaValida = await bcrypt.compare(

senha,

usuario.senha

);



if(!senhaValida){

return res.status(401).json({

erro:"Senha incorreta"

});

}



const token = jwt.sign(

{

id:usuario.idUsuario,

tipo:usuario.tipoUsuario

},

process.env.JWT_SECRET

);



res.json({

mensagem:"Login realizado",

token

});



}catch(error){


res.status(500).json({

erro:error.message

});


}



}