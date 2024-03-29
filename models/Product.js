import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    cantitate: { type: Number, required: true },
    review: [
      {
        rating: { type: Number, required: true, default: 5 },
        comentariu: { type: String, required: false },
        user: {
          _id: { type: mongoose.Schema.Types.ObjectId },
          name: {
            type: String,
            required: true,
          },
          image: {
            type: String,
            required: true,
            default:
              "https://res.cloudinary.com/dyfedllac/image/upload/v1665469559/rose-dimat/stiock_profile_o2p6fm.jpg",
          },
        },
      },
    ],
    scorMedieReview: { type: Number, required: true, default: 5 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
