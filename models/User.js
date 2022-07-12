import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      dwfault: false,
    },
  },
  { timestamp: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
console.log(userSchema);

export default User;
