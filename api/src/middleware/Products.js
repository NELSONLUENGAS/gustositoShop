const  products  = require('../Data/Data');
const  { Product } =  require('../db');


async function loadDataBase(){
    return await Product.bulkCreate(products);
}

async function getAllProducts(){
    const products  = await Product.findAll();
    if(products.length){
        return {
            msg: 'Products ok!',
            data: products
        }
    }else{
        return {
            msg: 'No products exist!', 
        }
    }
}


module.exports = {
    loadDataBase,
    getAllProducts,
}