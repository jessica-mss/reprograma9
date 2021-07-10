const express = require("express");
const router = express.Router();
const contatosControllers = require("../controllers/contatosControllers");

router.get("/", contatosControllers.home);
router.get("/todos", contatosControllers.getAll);
router.get("/id/:id", contatosControllers.getById);
router.get("/nome", contatosControllers.getByNome);

router.post("/cadastrar", contatosControllers.createContact);

router.delete("/:id", contatosControllers.deleteContact);

module.exports = router;
