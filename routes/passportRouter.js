const express = require('express');
const router = express.Router();
const passport = require('passport');

//* ******************** SIGNUP *********************** *//

// get the signup form
router.get('/signup', (req, res, next) => {
  res.render('passport/signup');
});

//* ********************* LOGIN *****************************//

// get the login form
router.get('/login', (req, res, next) => {
  res.render('passport/login');
});

module.exports = router;
