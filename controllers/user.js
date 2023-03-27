import User from '../models/User.js';
import jsonwebtoken from 'jsonwebtoken'
import bcryptjs from "bcryptjs"

const controllers = {
    create: async (req, res) => {
        let user = {
            username: req.body.username,
            password: bcryptjs.hashSync(req.body.password, 10),
            is_online: false
        }
        try {
            await User.create(user) //crea el usuari
            res.status(201).json({
                message: "user created successfully",
                status:201
            })
        } catch (error) {
            console.error(error)
        }
    },
    sign_in: async (req, res) => {
        const { username, password } = req.body;
        try {
          const user = await User.findOne({ username });
      
          if (!user) {
            return res.status(401).json({ message: 'Incorrect username or password' });
          }
      
          const passwordMatch = await bcryptjs.compare(password, user.password);
      
          if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect username or password' });
          }
      
          // Actualizar la propiedad 'is_online' a 'true' en la base de datos para el usuario que inició sesión
          await User.findOneAndUpdate({ _id: user._id }, { is_online: true }, {new:true});
      
          // Si el usuario y la contraseña son correctos, puedes firmar un token y enviarlo en la respuesta.
          const token = jsonwebtoken.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 48 });
      
          user.password = null; // para proteger la contraseña
          return res.status(200).json({
            success: true,
            message: 'logged in user!',
            user,
            token,
          });
        } catch (error) {
          console.error(error);
        }
      },
      signout: async (req, res) => {
        const { username } = req.user
        try {
            await User.findOneAndUpdate(
                { username },
                { is_online: false },
                { new: true }
            )
           res.status(200).json({
            success:true,
            status:200,
            message:"Come back soon!"
           })
        } catch (error) {
            console.error(error.message)
        }
    },

}
export default controllers