const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const userData = await Category.findAll({include: [Product]})
    res.status(200).json(userData);
  } catch(err){
    res.status(400).json(err);
  }
    
    
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
  const userId = await Category.findOne({
    where:{
      id: req.product.id,
    },
    include: [Product]})
    res.status(200).json(userId);
   }   
      catch(err){
    res.status(400).json(err);
      }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try{const userData = await Category.create(req.body);
    res.status(200).json(userId);
    }
    catch(err){res.status(400).json(err);}
  // create a new category
});

router.put('/:id', async (req, res) => {
  try{const userData = await Category.update(req.body,{
    where:{
      id: req.params.id,
    }
  })
    res.status(200).json(userData);
    }
    
    catch(err) {res.status(400).json(err)}
  });
// update a category by its `id` value


router.delete('/:id', async (req, res) => {
  try {const userData = await Category.destroy({where: {id: req.params.id}})
  res.status(200).json(userData);
  }
  
  catch(err){res.status(400).json(err)}
  // delete a category by its `id` value
});

module.exports = router;
