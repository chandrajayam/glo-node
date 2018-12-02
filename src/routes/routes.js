const express = require('express');
const choiceController = require('../controllers/saveChoice.controller');
const router = express.Router();

router
  .post('/',choiceController.saveChoice)

module.exports = router;
