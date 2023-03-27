const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly:false})
        console.log(validation.error)
        console.log(validation.error?.details)
        if (validation.error) {
            return res.status(400).json({
                success: false,
                status:400,
                message: validation.error.details.map(error=>error.message)
            })
        }
        return next()
    }
]

export default validator;