const Sequelize = require('sequelize')
const database = require('../database/db')

const Ponto = database.define('ponto',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo:{
        type:Sequelize.STRING,
        allowNull: false
    },
    data:{
        type:Sequelize.DATEONLY,
        allowNull: false
    },
    hora:{
        type: Sequelize.TIME,
        allowNull: false
    },
    geometria:{
        type: Sequelize.GEOMETRY,
        allowNull: false
    }
});

module.exports = Ponto;