const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const providerSchema = new Schema({
  establishmentName: String,
  address: {
    street: String,
    city: String,
    neighborhood: String,
  },
  contact: {
    email: String,
    phone: Number
  }
}, {
  timestamps: { 
    createdAt: "created_at",
    updatedAt: "updated_at" 
  }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;