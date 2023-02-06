const { Router } = require('express');
const router = Router();
const { getAllProducts } = require('../middleware/Products');

router.get('/products', async(req, res, next)=>{
    try{
        const products = await getAllProducts();
        res.status(200).send(products);
    }catch(error){
        next(error);
    }
});


module.exports = router;
