const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password:{
      type:String,
      required:true,
      lowercase:true,
      trim:true
    },
    password2:{
      type:String,
      lowercase:true,
    },
    user_type:{
      type:String,
      required: true,
    },
    licence_doc:{
      type:String,
    },
    contact_number:{type:String},
    profile_picture:{type:String},
    business_name:{
        type: String,
        required: true,
        trim: true,
        min: 3
      },
    hash_password: {
      type: String,   
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);


userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);