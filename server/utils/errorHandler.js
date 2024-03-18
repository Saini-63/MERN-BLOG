export const errorHandler = (success = false, statusCode, message) => {
    const error = new Error()
    error.success = success;
    error.statusCode = statusCode;
    error.message = message;
    return error;
    //console.log(error);
}