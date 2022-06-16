const express = require('express');
const router = express.Router();

router.
    route('/')
    .post((_req, _res) => { _res.send({message: "message received", body: _req.body })})
    .get((_req, _res) => {_res.send({message: "hello world"})})

module.exports = router;