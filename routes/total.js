const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const total = require('../total')
const convert = require('../convert')

router.post('/total', (req, res) => {
    console.log("POST Total");
    const { body } = req;
    var values = body.values;
    console.log("values " + values);
    var result = total(values);
    console.log("total " + result);
    var convertResult = convert(result);
    console.log("Before return");
    res.json(convertResult);
  });

module.exports = router;