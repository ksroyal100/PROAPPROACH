// Type 1 by using Promises resolve & reject
const asynHandler = (reqHanlder) => { // here function =reqHandler pass as a parameter
    (req, res, next) => {
        Promise.resolve(reqHanlder(req,res, next)).catch((err) => next(err));
    }
}

export { asynHandler }


// Type 2 by using try catch with async-await

// const asynHandler = (reqHandler) => async (req, res, next) => {
//     try {
//         await reqHandler(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }