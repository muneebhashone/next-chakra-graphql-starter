import mongoose, { Types, Model } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  username: string;
  email_verified?: Date;
  image?: string;
  gender?: "MALE" | "FEMALE" | "OTHER";
  role: "ADMIN" | "USER";
  dob: Date;
  phone: string;
  active: boolean;
  password: string;
  reviews?: Types.ObjectId[];
  password_reset_code?: string;
  verification_code?: string;
  products?: Types.ObjectId[];
  notifications?: Types.ObjectId[];
}

interface IUserDocument extends IUser, Document {}

interface IUserModel extends Model<IUserDocument> {}

const UserSchema = new mongoose.Schema<IUserDocument, IUserModel>(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true },
    email_verified: { type: Date },
    image: { type: String },
    gender: { type: String, enum: ["MALE", "FEMALE", "OTHER"] },
    role: { type: String, default: "USER", enum: ["ADMIN", "USER"] },
    dob: { type: Date },
    phone: { type: String },
    active: { type: Boolean, default: true },
    password: { type: String, default: "random_password" },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
    password_reset_code: { type: String },
    verification_code: { type: String },
  },
  { timestamps: true }
);

const User =
  mongoose.models.User ||
  mongoose.model<IUserDocument, IUserModel>("User", UserSchema);

export default User;
