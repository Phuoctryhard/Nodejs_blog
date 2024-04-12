const  express = require("express");

const  router = express.Router();
// đối tượng đc khởi tạo từ class 

const meController = require('../app/Controller/MeController')



router.get('/stored/courses', meController.storedCourses)


module.exports = router