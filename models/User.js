import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    image: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dyfedllac/image/upload/v1665469559/rose-dimat/stiock_profile_o2p6fm.jpg",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
