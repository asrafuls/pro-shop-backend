import express from "express";
import { authUser, getUserProfile, registerUser } from "../controllers/usersControllers.js";
import { protect } from "../middleware/userMiddleware.js";
const router = express.Router()


// Register a user
router.route('/').post(registerUser)

// Post a user 
router.post('/login', authUser)

// Get user profile data
router.route('/profile').get(protect, getUserProfile)

export default router