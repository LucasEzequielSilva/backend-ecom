import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {type:"string", require: true},
        description: {type:"string", require: true},
        photos: {type:"array", require: true},
        price: {type:"number", require: true},
        category_id: { type: mongoose.Types.ObjectId, ref:"categories", require:true }
    },
    {
        timestamps: true
    }
)

const Products = mongoose.model('products', schema)
export default Products