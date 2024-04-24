const Product = require('../Models/productDetailsDB');
const { route } = require('../Route');




// get product details
exports.getProductDetails = (req, res) =>{
    Product.find()
     .then(response=>{
        res.status(200).json({
            message : "product Details fetched successfully...!",
            product : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
}
        