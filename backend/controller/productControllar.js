const Product = require("../model/product");

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

//create product

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, image } = req.body;
    const product = await new Product({
      name,
      price,
      category,
      image,
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

//delete product by id

exports.delete = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete({
      _id: req.params.id,
    });

    if (deleteProduct) {
      res.status(220).json({ Message: "Product is dekete" });
    } else {
      res.status(500).json({ Message: "Product not updated" });
    }

    if (!deleteProduct == req.params.id) {
      console.log("kfjf");
    } else {
      console.log("Product already delete");
    }
  } catch (error) {
    console.log(error);
  }
};
