import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const NomineeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    nomineeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // if nominee is also a registered user
    },
  },
  { _id: false } // avoid generating _id for each subdoc if not needed
);

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    encryptionKey: { type: String, required: true },
    lastAliveCheck: { type: Date },
    lastAliveResponse: { type: Date },
    aliveStatus: {
      type: String,
      enum: ["active", "unresponsive", "deceased"],
      default: "active",
    },
    alivePhase: {
      type: String,
      enum: ["initial", "reminder", "final"],
      default: "initial",
    },
    nominees: [NomineeSchema],
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("passwordHash")) return next(); // Only hash if changed
  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
  next();
});

// Method to compare raw password with hashed password
UserSchema.methods.comparePassword = async function (rawPassword) {
  return bcrypt.compare(rawPassword, this.passwordHash);
};

const User = mongoose.model("User", UserSchema);
export default User;
