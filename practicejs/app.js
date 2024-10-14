const express = require('express');
const fs = require('fs');
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());

let products = [];

const readProducts = () => {
  products = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
};

readProducts();

const saveChanges = () => {
  fs.writeFileSync("./products.json", JSON.stringify(products));
};

app.post("/create-product", (req, res) => {
    var newId = products.length+1;
    const newProduct ={ id:newId,...req.body};
    
    if (!newProduct.name && !newProduct.price && !newProduct.brand && !newProduct.category) {
        return res.status(400).json({
          message: "All fields are required!",
        });
      }
    const key=`data-${id}`;
    products[key]=newProduct;
    saveChanges();
    return res.status(200).json({
      data: products,
      message: "updated product list",
    });
  });

  app.get("/products", (req, res) => {
    return res.status(200).json({
      data: products,
      message: "all products feteched successfully",
    });
  });
  
  app.get("/product/:id(\\d+)", (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === +id);
    if (!product) {
      return res.status(400).json({
        message: "invalid product id",
      });
    }
    return res.status(200).json({
      data: product,
      message: "product info fetected successfully",
    });
  });

  app.patch("/change-brand/:id(\\d+)", (req, res) => {
    const { id } = req.params;
    const { newBrand } = req.body;
    const product = products.find((p) => p.id === +id);
    if (!product) {
      return res.status(400).json({
        message: "invalid product id",
      });
    }
    product.brand = newBrand;
    saveChanges();
    return res.status(200).json({
      data: product,
      message: "updated product information",
    });
  });

  app.delete("/delete-product/:id(\\d+)", (req, res) => {
    const { id } = req.params;
    const newProducts = products.filter((product) => product.id !== +id);
    if (newProducts.length !== products.length) {
      products = newProducts;
      saveChanges();
    }
    return res.status(200).json({
      data: products,
      message: "updated product list",
    });
  });

app.listen(app.get("port"));