const { Sequelize } = require("sequelize");


const banco = new Sequelize({

dialect:"sqlite",

storage:"soda.sqlite"

});


module.exports=banco;