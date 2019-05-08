'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.get('/restaurants', function (req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
});

module.exports = router;
