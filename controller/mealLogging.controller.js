const { createMealService } = require("../services/mealLogging.services")



exports.createMeals=async (req, res, next) => {
    try {
        const result=await createMealService(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "Data inside successfully",
        data: result
      })
    } catch (error) {
        res.status(400).json({
            stauts:"fail",
            message: "Data is not inserted",
            error : error.message
          })
    }
}