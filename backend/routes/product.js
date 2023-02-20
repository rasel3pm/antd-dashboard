const router = require("express").Router();
const productController = require("../controller/productControllar");

router.get("/", productController.getAllProduct);
router.get("/single-product/:id", productController.getSingleProduct);
router.post("/create", productController.createProduct);
router.patch("/update/:id", productController.update);
router.delete("/deleteproduct/:id", productController.delete);

module.exports = router;
