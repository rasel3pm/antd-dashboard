const router = require("express").Router();
const productController = require("../controller/productControllar");

router.get("/", productController.getAllProduct);
router.post("/create", productController.createProduct);
router.patch("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;
