
const mongoose = require("mongoose");
require("dotenv").config();
const { shouldSeedUsers, seedUsers } = require("../seed/UsersSeeder");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB Connected Successfully");

    if (await shouldSeedUsers()) {
      await seedUsers();
      console.log("Seeding complete");
    } else {
      console.log("Seeding not required");
    }
  } catch (error) {
    console.error("DB Connection or Seeding Error:", error);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = dbConnect;
