const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  await mongoose
    .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed", error);
    });
};

module.exports = dbConnect;
