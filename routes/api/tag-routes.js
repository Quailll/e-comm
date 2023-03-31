const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const userData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    })
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const userId = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    })
    res.status(200).json(userId);
  } catch (err) {
    res.status(400).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tagCreate = await Tag.create(req.body);
    res.status(200).json(tagCreate);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const userId = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userId);
  } catch (err) {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const userId = await Tag.destroy({ where: { id: req.params.id } });
    res.status(200).json(userId);
  } catch (err) {
    res.status(400).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
