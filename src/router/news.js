const  express = require("express");

const  router = express.Router();
// đối tượng đc khởi tạo từ class 

const newController = require('../app/Controller/NewsController')


router.get('/:slug', newController.show)
router.get('/', newController.index)


module.exports = router