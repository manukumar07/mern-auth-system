const validate = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const msg = error.details.map(d => d.message).join(", ");
            return res.status(400).json({ success: false, message: `❌ ${msg}` });
        }
        req.body = value;
        next();
    };
};
export { validate };