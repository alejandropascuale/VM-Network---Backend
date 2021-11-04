
module.exports = function (sequelize, DataTypes) {
    let alias = 'Receipts';

    let cols = {
     idReceipts: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     period: {
         type: DataTypes.STRING
     },
     file: {
         type: DataTypes.STRING
     },
     id_user: {
         type: DataTypes.STRING
     }
    }
    let config = {
        tableName: 'receipts_user',
        timestamps: false
    }
    let Receipts = sequelize.define(alias, cols, config);

    return Receipts;
}