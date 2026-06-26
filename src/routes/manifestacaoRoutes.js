const router = require("express").Router();

const manifestacaoController = require("../controllers/manifestacaoController");


router.post(
"/",
manifestacaoController.criar
);


router.get(
"/",
manifestacaoController.listar
);


router.get(
"/:id",
manifestacaoController.buscar
);


router.put(
"/:id",
manifestacaoController.editar
);


router.delete(
"/:id",
manifestacaoController.excluir
);



module.exports = router;