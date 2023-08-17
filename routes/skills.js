var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

//All actual paths star with /skills

//Get /skills
router.get('/', skillsCtrl.index);
//get/skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
