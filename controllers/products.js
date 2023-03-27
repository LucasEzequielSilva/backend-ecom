import Products from '../models/Products.js'

const controllers = {
    create: async (req, res) => {
        try {
            await Products.create(req.body)
            res.status(201).json({
                message: "Producto creado exitosamente",
                status:201
            })
        } catch (error) {
            console.error(error.message)
        }
    },
    read: async(req, res) => {
        try {
            let productos = await Products.find()
            res.status(200).json({
                productos,
                status:200,
                message:"success",
            })
        } catch (error) {
            console.error(error.message)
        }
    },
    readOne: async (req, res) => {
        let {id} = req.params
        try {
            let product = await Products.findById(id)
            if(product){
                res.status(200).json({
                    product,
                    status:200,
                    message:"success",
                })
            }
        } catch (error) {
            console.error(error.message)
        }
    },
    update: async (req, res) => {
        let { id } = req.params;
        try {
          if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(204).json({ message: 'No se proporcionaron datos para actualizar.', status: 204 });
          }
          const product = await Products.findOneAndUpdate({_id: id}, req.body, {new:true});
          return res.status(200).json({product, message: 'Producto actualizado', status:200 });
        } catch (error) {
          console.error(error.message);
        }
      }
}
export default controllers