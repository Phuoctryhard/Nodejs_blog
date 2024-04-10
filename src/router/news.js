const  express = require("express");

const  router = express.Router();
// đối tượng đc khởi tạo từ class 

const newController = require('../app/Controller/NewsController')


router.use('/:slug', newController.show)
router.use('/', newController.index)


module.exports = router