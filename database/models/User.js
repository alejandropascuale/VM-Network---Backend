
module.exports = function (sequelize, DataTypes) {
    let alias = 'User';

    let cols = {
     idusers: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     idEmployee: {
         type: DataTypes.INTEGER
    },
     names: {
         type: DataTypes.STRING
     },
     userName: {
         type: DataTypes.STRING
     },
     password: {
         type: DataTypes.STRING
     },
    profile: {
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

    User.associate = function (models) {
        User.hasMany(models.Receipts, {
            as: 'receipts',
            foreignKey: 'id_user'
        });
        
    }

    return User;
}