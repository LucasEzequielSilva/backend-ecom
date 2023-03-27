import Joi from "joi-oid";

const schema = Joi.object({
    _id: Joi
        .objectId(),
    name: Joi
    .string()
    .required()
    .min(3)
    .max(30)
    .messages({
        "string.min": "The name must have at least 3 characters",
        "string.max": "The name must have a maximum of 30 characters",
  }),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200)
        .messages({
            "string.min": "Descripcion must have at least 20 characters",
            "string.max": "Description must have a maximum of 200 characters",
      }),
      photos: Joi
      .array().items(Joi.string().uri())
      .required()
      .min(1)
      .messages({
          
          "any.required": "the pages have to be url",
          "string.empty": "pages must be at least 1 characteres",
      }),
      price: Joi
      .number()
      .required()
      .min(1)
      .messages({
        "number.empty": "Este campo no puede quedar vacio",
        "any.required": "Debes insertar algo",
        "number.min": "El numero debe ser mayor o igual a 1",
      }),
      category_id: Joi.objectId().required().messages({
        'any.required': 'Debes insertar la categoría',
        'objectId.empty': 'Debes insertar la categoría',
        'invalid': 'El valor ingresado no es válido'
      })
})

export default schema