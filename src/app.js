const express = require('express');
const ProductManager = require("./productManager.js");

const server = express();
server.use(express.urlencoded({ extended: true }))

const Product = new ProductManager("./assets/product.json")

server.get("/product", async (req, res) => {
    const limite = req.query.limit
    if (limite == undefined && limite == 0) {
        let productos = await Product.getProducts();
        res.send(productos)
    }
    let productos = await Product.getProducts(limite);
    res.send(productos)
})

server.get("/product/:pid", async (req, res) => {
    const pid = req.params.pid
    let product = await Product.getProductById(pid);
    if (product == null) {
        res.send("Producto no encontrado,intente nuevamente")
    } else {
        res.send(product)

    }
})

server.listen(8080, () => {
    console.log('Escuchando en puerto 8080')
})
