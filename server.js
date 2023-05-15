const express = require("express");
const productManager = require("./productManager.js");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

const products = new productManager();

app.get("/products", (req, res) => {
  const limit = req.query.limit;
  if (req.query && limit) {
    const productFilterByLimit = products.slice(0, 6);
    return res.json({
      status: "succes",
      msg: "five products found",
      data: productFilterByLimit,
    });
  } else {
    return res.json({
      status: "succes",
      msg: "these are all the products  ",
      data: products,
    });
  }
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = product.find((p) => p.id == id);
  if (product) {
    return res.json({
      status: "success",
      msg: "product find",
      data: products.id,
    });
  } else {
    return res.json({
      status: "error ",
      msg: "product is not found",
      data: {},
    });
  }
});

app.get("*", (req, res) => {
  return res.json({ status: "error", msg: "error not found ", data: {} });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
