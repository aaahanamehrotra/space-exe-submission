const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth')
router.get('/', (req, res) => res.render('dashboard'));
router.get('/map', (req, res) => res.render('map'));
router.get('/about', (req, res) => res.render('about'));
router.get('/posts/create', ensureAuthenticated, (req, res) => res.render('create', { username: req.user.name }));
module.exports = router;
