const router = require('express').Router();
const { generateAccessToken, createCandidate, getPosts }  = require('../controllers/oauth.controller');

router.post('/token', generateAccessToken, createCandidate);

module.exports = router;