const Products = require('../Models/productDB');

// get product details BBy Id
exports.getProductDetailsById = (req, res) =>{
    const{id} = req.params;
    Products.find({restraunt_id:id},{})
     .then(response=>{
        console.log(response)
        res.status(200).json({
            message : "product Details By Id fetched successfully...!",
            product : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
}
   