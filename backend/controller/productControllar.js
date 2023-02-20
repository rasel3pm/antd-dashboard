const Product = require("../model/product");
const cloudinary = require("cloudinary").v2;

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();

    if (!product) {
      res.status(404).json({ Message: "product not find", product });
    } else {
      res.status(200).json({ Message: "product find succesfully", product });
    }
  } catch (error) {
    console.log(error);
  }
};

// GET /products/:id - get a product by ID
exports.getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//create product

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;

    const product = await new Product({
      name,
      price,
      category,
    });
    const newProuct = await product.save();

    if (!product) {
      res.status(200).json({ Message: "Product Successful", newProuct });
    } else {
      res
        .status(202)
        .json({ Message: "Product Created Successful", newProuct });
    }
  } catch (error) {
    console.log(error);
  }
};

//update product by id
exports.update = async (req, res) => {
  try {
    const productUpdate = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (productUpdate) {
      res.status(500).json({ Message: "Product is updated" });
    } else {
      res.status(400).json({ Message: "Product is not updated" });
    }
  } catch (error) {
    console.log(error);
  }
};

// DELETE /products/:id - delete a product by ID
exports.delete = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.deleteOne({ _id: productId });

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
