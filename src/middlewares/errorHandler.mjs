export const errHandler = (err, request, response, next) =>{
    const statusCode = err.statusCode || 500;

    response.status(statusCode).json({
        ok: false,
        message: err.message || "Error de servidor"
    })
}