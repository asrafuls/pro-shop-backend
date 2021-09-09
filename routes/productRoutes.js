import express from "express";
import { getProductById, getProducts } from "../controllers/productsControllers.js";
const router = express.Router()



// All products api
router.route('/').get(getProducts)

// Get a single product by id
router.route('/:id').get(getProductById)

export default router