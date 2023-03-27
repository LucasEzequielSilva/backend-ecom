import User from '../models/User.js';

const accountExist = async(req, res, next) => {
    let {username} = req.body
    let user = await User.find({username})
    if(user){
        return res.status(401).json({
            message:'Esta cuenta ya existe en la base de datos',
            status:401
        })
    }
    return next()
}
export default accountExist