const fs = require("fs");

class productManager {
  constructor() {
    this.path = "./products.json";
    this.products = [];

    const productsString = fs.readFileSync("this.path", "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products = [...this.products, newProduct];
    fs.writeFileSync(this.path, JSON.stringify(this.products));
    return true;
  }
  getId() {
    let maxId = 0;
    for (let i = 0; i < this.products.length; i++) {
      const p = this.products.length[i];

      if (p.id > maxId) {
        maxId = p.id;
      }
    }
    fs.writeFileSync(this.path, JSON.stringify(this.products));
    return ++maxId;
  }

  getProduct() {
    const productsArray = Object.entries(this.products);
    console.log(productsArray);
    const productsString = fs.readFileSync("this.path", "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
  }
  validations() {
    const existsInArray = this.products.some((p) => (p.code = product.code));

    const productFinal = {
      id: this.getId(),
      ...product,
    };

    (!existsInArray && !containNull && this.products.push(productFinal)) ||
      console.log("Error when adding product");
  }

  getProductById(id) {
    const found = this.products.find((p) => p.id == id);
    if (found) {
      this.products = JSON.parse(fs.readFileSync("this.path", "utf-8"));
      return found;
    } else {
      return "error not found";
    }
  }

  upDateProduct(id, key, value) {
    this.products = JSON.parse(fs.readFileSync("this.path", "utf-8"));
    if (key == "id") {
      return console.log("is not possible to modify the id field");
    } else if (this.products.find((p) => p.id === id)) {
      const found = this.products.find((p) => p.id === id);
      found[key] = value;
      fs.writeFileSync(this.path, JSON.stringify(this.products));
      return console.log("updated product succesfully");
    } else {
      return console.log("product not found");
    }
  }

  deleteProduct(id) {
    this.products = JSON.parse(fs.readFileSync("this.path", "utf-8"));
    if (this.product.find((p) => p.id === id)) {
      this.products.splice(
        this.products.indexOf(this.product.find((p) => p.id === id)),
        1
      );
      fs.writeFileSync(this.path, JSON.stringify(this.products));

      return console.log("deleted product succesfullly");
    } else {
      return console.log("product not found");
    }
  }
}

const addingProduct = new productManager();
addingProduct.addProduct(objetoDePrueba, objetoDePrueba2);
const objetoDePrueba1 = {
  title: shirt,
  description: summerWhiteShirt,
  price: 1000,
  thumbnail: thumbnail,
  code: 2346,
  stock: 20,
};

const objetoDePrueba2 = {
  title: shorts,
  description: summerShorts,
  price: 1000,
  thumbnail: thumbnail2,
  code: 2347,
  stock: 25,
};

const objetoDePrueba3 = {
  title: dress,
  description: summerPinkDress,
  price: 1900,
  thumbnail: thumbnail,
  code: 2340,
  stock: 20,
};
const objetoDePrueba4 = {
  title: bikini,
  description: summerWhitebikini,
  price: 2000,
  thumbnail: thumbnail,
  code: 2341,
  stock: 20,
};
const objetoDePrueba5 = {
  title: glasses,
  description: redGlasses,
  price: 1300,
  thumbnail: thumbnail,
  code: 2342,
  stock: 20,
};
const objetoDePrueba6 = {
  title: croptop,
  description: blackCroptop,
  price: 1100,
  thumbnail: thumbnail,
  code: 2343,
  stock: 20,
};
const objetoDePrueba7 = {
  title: t.shirt,
  description: summert.TShirt,
  price: 1000,
  thumbnail: thumbnail,
  code: 2344,
  stock: 20,
};
const objetoDePrueba8 = {
  title: trousers,
  description: winterTrousers,
  price: 2000,
  thumbnail: thumbnail,
  code: 2345,
  stock: 20,
};
const objetoDePrueba9 = {
  title: pants,
  description: summerPants,
  price: 3500,
  thumbnail: thumbnail,
  code: 2346,
  stock: 20,
};
const objetoDePrueba10 = {
  title: shorts2,
  description: summerShorts2,
  price: 1600,
  thumbnail: thumbnail,
  code: 2347,
  stock: 20,
};
const objetoDePrueba11 = {
  title: skirt,
  description: summerSkirt,
  price: 1800,
  thumbnail: thumbnail,
  code: 2348,
  stock: 20,
};
module.exports = productManager;
