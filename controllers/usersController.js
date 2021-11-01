const fetch = require('fetch-node');

const controller = {
    listUsers: async (req, res) => {
        const usersApi = (await (await fetch('http://localhost:3000/api/users')).json());
        /* return res.render('/', {usersApi}); */
        console.log(usersApi);
    }
}

module.exports = controller;