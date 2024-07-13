const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = async (req, res, next) =>{
    const token = req.header('Authorization').split(' ')[1];
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};


// exports.auth = async (req, res, next) => {
//   try {
//     const token =
//       req.body.token ||
//       req.cookies.token ||
//       req.header("Authorization").replace("Bearer ", "");
//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Token does not found",
//       });
//     }
//     try {
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       console.log("Decode", decode);
//       req.id = decode.id;
//     } catch (err) {
//       return res.status(401).json({
//         success: false,
//         message: "Token is invalid",
//       });
//     }
//     next();
//   } catch (err) {
//     return res.status(401).json({
//       success: false,
//       message: "Something went wrong in token authentication",
//     });
//   }
// };
