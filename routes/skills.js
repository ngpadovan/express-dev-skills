var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//All actual paths star with /skills

//Get /skills
router.get('/', skillsCtrl.index);
//get/skills/:id
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
