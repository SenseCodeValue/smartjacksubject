const express = require('express');
const router = express.Router();

const imageController = require('../controllers/image');

router.post('/',imageController.createImage);
router.get('/:name',imageController.getImageURL);
module.exports = router;