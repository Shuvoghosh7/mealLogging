const express = require("express");
const router=express.Router()

const mealLoggingController=require('../controller/mealLogging.controller')

router.route('/student')
/* .get(schoolManagementController.getController) */
.post(mealLoggingController.createMeals)

module.exports=router;