import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { authUser } from './controllers/usersControllers.js';

const app = express()
const port = 3001

dotenv.config()
connectDB()

// All use function
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())



// Home api
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// Custom error management
app.use(notFound)

app.use(errorHandler)

// listen
app.listen(process.env.PORT || port)