const express = require("express")
const router = express.Router()

router.get("/clientes", (req, res) => {
    res.render("colaborador/cliente/clientes")
})

router.get("/clientes/editar", (req, res) => {
    res.render("colaborador/cliente/clienteEditar")
})

module.exports = router