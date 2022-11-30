const router = require("express").Router();
const { find, create, update, remove } = require("./design.controller");

const multer = require("multer");
const path = require("path");
const { findById } = require("./design.controller");

const storage = multer.diskStorage({
  destination: __dirname + "/../../upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
}).array("images");

router.get("/", find);
router.get("/:idDesigns", findById);
router.post("/", upload, create);
router.put("/", update);
router.delete("/", remove);

module.exports = router;
