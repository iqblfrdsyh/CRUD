import mongoose from "mongoose"

const Product = mongoose.Schema({
    productName: String,
    price: String,
    category: String
})

export default mongoose.model('product', Product)