const {jwt_decode} =require("jsonwebtoken");

export const getProfile = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};


