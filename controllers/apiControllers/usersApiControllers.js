const db = require ('../../database/models');
const { Op } = require("sequelize");

const controller = {
    listUsers: async (req, res) => {
        const usersApi = await db.User.findAll();
        return res.json(usersApi);
    },
    createUser: async (req, res) => {
        const defaultImageProfile = '/images/avatars/user-avatar.jpg'
        const userCreate = await db.User.create({
            idEmployee: req.body.idEmployee,   
            names: req.body.names,
            userName: req.body.userName,   
            password: bcrypt.hashSync(req.body.password, 10),
            perfil: 'usuario',
            avatar: defaultImageProfile,
        })
        return res.json(userCreate);
    }
}

module.exports = controller;