const db = require ('../../database/models');
const { Op } = require("sequelize");

const controller = {
    listUsers: async (req, res) => {
        const usersApi = await db.User.findAll();
        return res.json(usersApi);
    }
}

module.exports = controller;