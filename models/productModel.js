import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    title: {
        type: String,
        require: true
    },
    imgs: {
        type: Object,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    variant: {
        type: Array,
        require: true
    },
    price: {
        type: Array,
        require: true,
        default: 0
    },
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    numOfReviews: {
        type: Number,
        require: true.valueOf,
        default: 0
    },
    reviews: [reviewsSchema],
    stockItems: {
        type: Number,
        require: true.valueOf,
        default: 0
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

export default Product