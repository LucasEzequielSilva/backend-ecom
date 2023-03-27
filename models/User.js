import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        username: {type:"string", require: true},
        password: {type:"string", require: true},
        is_online: {type:"boolean", require: true}
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('users', schema)
export default User