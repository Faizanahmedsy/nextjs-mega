let products = [
  {
    id: 1,
    name: "Faizan's Phone",
    price: 100,
  },
  {
    id: 2,
    name: "Faizan's Laptop",
    price: 200,
  },
  {
    id: 3,
    name: "Faizan's PC",
    price: 300,
  },
];

export const getProducts = () => {
  return products;
};

export const createProduct = (product) => {
  products.push(product);
};

export const updateProduct = (id, product) => {
  const index = products.findIndex((product) => product.id === +id);

  if (index === -1) throw new Error("Product not found");

  products[index] = product;
};

export const deleteProduct = (id) => {
  products = products.filter((product) => product.id !== +id);
  return;
};

// TODO: TEST THEM

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 2000);
//   });

// exports.getProducts = (req, res, next) => {
//   res.status(200).json({
//     products,
//   });
// };

// exports.postProducts = (req, res, next) => {
//   const { name, price } = req.body;
//   const product = {
//     id: products.length + 1,
//     name,
//     price,
//   };
//   products.push(product);
//   res.status(201).json({
//     message: "Product added successfully",
//     product,
//   });
// };

// exports.updateProduct = (req, res, next) => {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const product = products.find((product) => product.id === +id);
//   product.name = name;
//   product.price = price;
//   res.status(200).json({
//     message: "Product updated successfully",
//     product,
//   });
// };

// exports.deleteProduct = (req, res, next) => {
//   const { id } = req.params;
//   products = products.filter((product) => product.id !== +id);
//   res.status(200).json({
//     message: "Product deleted successfully",
//   });
// };
