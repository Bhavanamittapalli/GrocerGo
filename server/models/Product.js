import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true },
    description: {type: Array, required: true},
    price: {type: Number, required: true },
    offerPrice: {type: Number, required: true },
    image: {type: Array, required: true },
    category: {type: String, required: true },
    quantityValue: {type: Number, required: true },
    quantityUnit: {type: String, required: true, enum: ['g', 'kg', 'ml', 'L', 'pieces'] },
    inStock: {type: Boolean, default: true },
}, { timestamps: true})

const Product = mongoose.models.product || mongoose.model('product', productSchema)

export default Product