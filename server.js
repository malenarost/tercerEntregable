const express = require("express");
const productManager = require("./products.json");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  const limit = req.query.limit;
  if (req.query && limit) {
    const productFilterByLimit = productManager.slice(0, limit);
    return res.json({
      status: "succes",
      msg: "five products found",
      data: productFilterByLimit,
    });
  } else {
    return res.json({
      status: "succes",
      msg: "these are all the products  ",
      data: productManager,
    });
  }
});
app.get(`/products/:id`, (req, res) => {
  const id = req.params.id;
  const product = productManager.find((p) => p.id == id);
  if (product) {
    return res.json({
      status: `success`,
      msg: `product found`,
      data: product,
    });
  } else {
    return res.json({
      status: `error`,
      msg: `product is not found`,
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
