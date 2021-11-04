const express = require('express');
const router = express.Router ();
const fetch = require('fetch-node');

const controller = {
    createUser: async (req, res) => {
        await (await fetch('http://localhost:3001/api/users/register')).json();
        return res.redirect('http://localhost:3000/');
    },
    updateUser: async (req, res) => {
        await (await fetch('http://localhost:3001/api/users/edit/')).json();
        return res.redirect('http://localhost:3000/');
    }
}

module.exports = controller;