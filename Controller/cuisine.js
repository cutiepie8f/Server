const Cuisine = require('../Models/cuisineDB');
const { route } = require('../Route');




// get cusine details
exports.getCuisine = (req, res) =>{
    Cuisine.find()
     .then(response=>{
        res.status(200).json({
            message : "cuisine Details fetched successfully...!",
            cuisine : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
}
        