const fetch = require('fetch-node');

const controller = {
    listUsers: async (req, res) => {
        const usersApi = await (await fetch('http://localhost:3000/api/users')).json();
    },
    createUser: async (req, res) => {
        const usersCreate = await (await fetch('http://localhost:3000/api/users', {method: 'post', data: req.body})).json();
    }
}

module.exports = controller;