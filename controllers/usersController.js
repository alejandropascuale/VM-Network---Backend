const express = require('express');
const router = express.Router ();
const fetch = require('fetch-node');

const controller = {
    uploadReceipts: async (req, res) => {
        await (await fetch('http://localhost:3001/api/users/receipts/upload')).json();
        return res.redirect('http://localhost:3000/');
    }
}

module.exports = controller;