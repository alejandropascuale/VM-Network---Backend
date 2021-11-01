const db = require ('../../database/models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');

const controller = {
    listUsers: async (req, res) => {
        const usersApi = await db.User.findAll();
        return res.json(usersApi);
    },
    createUser: (req, res) => {
        const defaultImageProfile = '/images/avatars/user-avatar.jpg'
        db.User.create({
            idEmployee: req.body.idEmployee,   
            names: req.body.names,
            userName: req.body.userName,   
            password: bcrypt.hashSync(req.body.password, 10),
            profile: 'usuario',
            avatar: defaultImageProfile,
        })
        return res.redirect('http://localhost:3000/');
    }
}

module.exports = controller;