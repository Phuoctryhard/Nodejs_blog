const  express = require("express");

const  router = express.Router();
// đối tượng đc khởi tạo từ class 

const siteController = require('../app/Controller/SiteController')


router.use('/:slug',siteController.show)
router.use('/', siteController.index)


module.exports = router