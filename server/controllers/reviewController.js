import Review from "../models/Review.js";
import Product from "../models/Product.js";

// Add Review : /api/review/add
export const addReview = async (req, res) => {
    try {
        const { userId, productId, rating, comment } = req.body;
        
        if (!rating || !comment) {
            return res.json({ success: false, message: "Rating and comment are required" });
        }

        const review = await Review.create({
            userId,
            productId,
            rating,
            comment
        });

        res.json({ success: true, message: "Review added successfully", review });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// Get Reviews for Product : /api/review/product/:id
export const getProductReviews = async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await Review.find({ productId: id }).populate('userId', 'name').sort({ createdAt: -1 });
        res.json({ success: true, reviews });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
