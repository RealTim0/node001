exports.createPostValidator = (req, res, next) => {
    req.check("title", "write a title").notEmpty()
    res.check("title", "must have more characters").isLength({
        min: 4,
        max: 150
    })
    req.check("body", "write a body").notEmpty()
    res.check("body", "must have more characters").isLength({
        min: 4,
        max: 2000
    })

    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status.json({error : firstError})
    }
    next()
}