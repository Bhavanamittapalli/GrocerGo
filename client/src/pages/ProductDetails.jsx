import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {

    const {products, navigate, currency, addToCart, axios, user} = useAppContext()
    const {id} = useParams()
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [thumbnail, setThumbnail] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const product = products.find((item)=> item._id === id);

    const fetchReviews = async () => {
        try {
            const { data } = await axios.get(`/api/review/product/${id}`);
            if (data.success) {
                setReviews(data.reviews);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addReview = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/review/add', {
                productId: id,
                rating,
                comment
            });
            if (data.success) {
                toast.success(data.message);
                setComment("");
                fetchReviews();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> product.category === item.category)
            setRelatedProducts(productsCopy.slice(0,5))
        }
    },[products])

    useEffect(()=>{
        setThumbnail(product?.image[0] ? product.image[0] : null)
        fetchReviews();
    },[product])


    return product && (
        <div className="mt-12">
            <p>
                <Link to={"/"}>Home</Link> /
                <Link to={"/products"}> Products</Link> /
                <Link to={`/products/${product.category.toLowerCase()}`}> {product.category}</Link> /
                <span className="text-primary"> {product.name}</span>
            </p>

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.image.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={thumbnail} alt="Selected product" />
                    </div>
                </div>

                <div className="text-sm w-full md:w-1/2">
                    <h1 className="text-3xl font-medium">{product.name}</h1>

                    <div className="flex items-center gap-0.5 mt-1">
                        {Array(5).fill('').map((_, i) => (
                          <img key={i} src={i < (reviews.length > 0 ? Math.round(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) : 4) ? assets.star_icon : assets.star_dull_icon} alt="" className="md:w-4 w-3.5"/>
                             
                        ))}
                        <p className="text-base ml-2">({reviews.length})</p>
                    </div>

                    <div className="mt-6">
                        <p className="text-gray-500/70 line-through">MRP: {currency}{product.price}</p>
                        <p className="text-2xl font-medium">MRP: {currency}{product.offerPrice}</p>
                        <span className="text-gray-500/70">(inclusive of all taxes)</span>
                    </div>

                    <div className="mt-4 flex flex-col gap-1">
                        <p className="text-base text-gray-600">
                            Net Qty: <span className="font-medium text-gray-800">{product.quantityValue} {product.quantityUnit}</span>
                        </p>
                        <p className={`text-base font-medium ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                    </div>

                    <p className="text-base font-medium mt-6">About Product</p>
                    <ul className="list-disc ml-4 text-gray-500/70">
                        {product.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    <div className="flex items-center mt-10 gap-4 text-base">
                        <button onClick={()=> addToCart(product._id)} className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" >
                            Add to Cart
                        </button>
                        <button onClick={()=> {addToCart(product._id); navigate("/cart")}} className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>

            {/* ---------- Reviews Section -------------- */}
            <div className="mt-20">
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-medium">Customer Reviews</p>
                    <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-medium mb-4">Reviews ({reviews.length})</h3>
                        <div className="space-y-6 max-h-[400px] overflow-y-auto no-scrollbar pr-4">
                            {reviews.length > 0 ? reviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <div className="flex items-center justify-between">
                                        <p className="font-medium text-gray-800">{review.userId.name}</p>
                                        <p className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex gap-0.5 mt-1">
                                        {Array(5).fill('').map((_, i) => (
                                            <img key={i} src={i < review.rating ? assets.star_icon : assets.star_dull_icon} alt="" className="w-3" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mt-2 italic">"{review.comment}"</p>
                                </div>
                            )) : <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-medium mb-4">Add a Review</h3>
                        {user ? (
                            <form onSubmit={addReview} className="space-y-4">
                                <div>
                                    <p className="mb-2">Rating</p>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <div key={num} onClick={() => setRating(num)} className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition ${rating >= num ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                                {num}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-2">Comment</p>
                                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full p-3 border border-gray-300 rounded focus:outline-primary h-24" placeholder="Share your experience..."></textarea>
                                </div>
                                <button type="submit" className="px-8 py-2.5 bg-primary text-white rounded hover:bg-primary-dull transition">Submit Review</button>
                            </form>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full py-10">
                                <p className="text-gray-500 mb-4">Please login to write a review</p>
                                <button onClick={() => setShowUserLogin(true)} className="px-8 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition">Login Now</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ---------- related products -------------- */}
            <div className="flex flex-col items-center mt-20">
                <div className="flex flex-col items-center w-max">
                    <p className="text-3xl font-medium">Related Products</p>
                    <div className="w-20 h-0.5 bg-primary rounded-full mt-2"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
                    {relatedProducts.filter((product)=>product.inStock).map((product, index)=>(
                        <ProductCard key={index} product={product}/>
                    ))}
                </div>
                <button onClick={()=> {navigate('/products'); scrollTo(0,0)}} className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition">See more</button>
            </div>
        </div>
    );

};


export default ProductDetails