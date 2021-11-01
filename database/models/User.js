
module.exports = function (sequelize, DataTypes) {
    let alias = 'User';

    let cols = {
     id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     file: {
         type: DataTypes.INTEGER
    },
     names: {
         type: DataTypes.STRING
     },
     user: {
         type: DataTypes.STRING
     },
     password: {
         type: DataTypes.STRING
     },
    perfil: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    let User = sequelize.define(alias, cols, config);
    return User;
}