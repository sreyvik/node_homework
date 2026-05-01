import productRoute from "./router/Product.route.js";
import express from "express";
const app = express();
app.use("/products", productRoute);




export default app;