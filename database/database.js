const Sequelize = require("sequelize")
const connection = new Sequelize('aguiamaster', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
})

module.exports = connection