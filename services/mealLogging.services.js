const Meals = require('../models/meals.model')

exports.createMealService = async (data) => {
    const product = await Meals.create(data)
    return product
}