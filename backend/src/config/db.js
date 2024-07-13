const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed", error);
    });
};
