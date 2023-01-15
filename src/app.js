const express = require('express');
const productsRoute = require('./routes/products.routes');
const cardsRoute = require ('./routes/carts.routes')
const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);
server.use("/api/products/", productsRoute);

server.use("/api/carts/", cardsRoute);
server.use("/api/carts/", cardsRoute);
server.use("/api/carts/", cardsRoute);

server.listen(8080, ()=> {
    console.log('Servidor escuchando en puerto 8080')
})
