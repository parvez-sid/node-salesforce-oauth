const { getPosts } = require('../controllers/posts.controller');

const router = require('express').Router();
router.get('/list', getPosts);

module.exports = router;