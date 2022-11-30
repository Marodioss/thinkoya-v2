const { find, create, update, remove } = require("./design.service");
const { findById } = require("./design.service");
const { findByCategory } = require("./design.service");

module.exports = {
  find: async (req, res) => {
    const { category } = req.query;
    if (category) {
      try {
        const result = await findByCategory(category);
        return res.status(200).json(result);
      } catch (e) {
        return res.status(500).json({
          message: "Internal Server Error",
        });
      }
    } else {
      try {
        const result = await find();
        return res.status(200).json(result);
      } catch (e) {
        return res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  },
  //find by id
  findById: async (req, res) => {
    try {
      const result = await findById(req.params.idDesigns);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  create: async (req, res) => {
    try {
      var design = req.body;
      var designs_image = req.files;
      const result = await create(design, designs_image);
      return res.status(201).json(result);
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  update: async (req, res) => {
    try {
      var design = {
        TitleDesigns: req.body.name,
        DescriptionDesign: req.body.description,
        Category: req.body.category,
      };
      var designs_image = req.files;
      const result = await update(design, designs_image);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  remove: async (req, res) => {
    try {
      const result = await remove(req.body.design.id);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
