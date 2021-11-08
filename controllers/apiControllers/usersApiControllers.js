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
    },
    loginUser: async (req, res) => {
        const userToLogin = await db.User.findOne ({
            where: {userName: req.body.userName}
        })
        if(userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                req.session.userLogged = userToLogin;
                res.cookie('userName', userToLogin.userName, { maxAge: (1000 * 60) * 60 })
                return res.redirect('http://localhost:3000');
            }
        }
    },
    logoutUser: async (req, res) => {
		res.clearCookie('userName');
		req.session.destroy();
		return res.redirect('http://localhost:3000/');
	},
    updateUser:  async (req, res) => {
        if (req.file) {
            await db.User.update({
                names: req.body.names,   
                userName: req.body.userName,   
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: '/images/avatars/'+req.file.filename
            },
            { where: {idusers: req.params.iduser}
            })
            res.cookie('userName', req.body.userName, { maxAge: (1000 * 60) * 60 })
            return res.redirect('http://localhost:3000');
        } else {
            await db.User.update({
                names: req.body.names,   
                userName: req.body.userName,   
                password: bcrypt.hashSync(req.body.password, 10)
            },
            { where: {idusers: req.params.iduser}
            })
            res.cookie('userName', req.body.userName, { maxAge: (1000 * 60) * 60 })
            return res.redirect('http://localhost:3000');
        }
    },
    receiptsUser: async (req, res) => {
        const receiptsUser = await db.Receipts.findAll({
            where: {id_user: req.params.idEmployee}
        })
        return res.json(receiptsUser);
    },
    listReceipts: async (req, res) => {
        const receipts = await db.Receipts.findAll();
        return res.json(receipts);
    },
    uploadReceipts: (req, res) => {
        /* db.User.create({
            period: req.body.period,
            description: req.body.description,   
            file: req.body.receipts
        })
        return res.redirect('http://localhost:3000/'); */
        console.log(req.body, req.file);
        return res.redirect('http://localhost:3000');
    }
}

module.exports = controller;