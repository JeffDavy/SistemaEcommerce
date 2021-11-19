const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")

//Arquivos externos
const clienteController = require("./admin/cliente/ClienteController")

//View engine
app.set('view engine', 'ejs')

//Static
app.use(express.static('public'))

//Body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//databse
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/", clienteController)

app.listen(8088, () => {
    console.log("O servidor está rodando!")
})