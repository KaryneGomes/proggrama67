const router = require("express").Router();

const respostaController = require("../controllers/respostaController");



router.post(
"/",
respostaController.criarResposta
);


router.get(
"/",
respostaController.listar
);


router.get(
"/:id",
respostaController.buscar
);



module.exports = router;