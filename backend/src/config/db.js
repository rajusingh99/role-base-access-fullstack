// const mongoose = require("mongoose");
// require("dotenv").config();

// const dbConnect = async () => {
//   await mongoose
//     .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("DB Connected Successfully"))
//     .catch((error) => {
//       console.log("DB Connection Failed", error);
//     });
// };

// module.exports = dbConnect;



const mongoose = require("mongoose");
require("dotenv").config();
const { shouldSeedUsers, seedUsers, shouldSeedUserRole, seedUserRole, shouldSeedSuperAdminRole, seedSuperAdminRole } = require("../seed/UsersSeeder");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB Connected Successfully");
    
    if(await shouldSeedUserRole()){
        await seedUserRole();
        console.log("User Role created!");
    }
    if(await shouldSeedSuperAdminRole()){
        await seedSuperAdminRole();
        console.log("Super Admin Role created!");
    }

    if (await shouldSeedUsers()) {
        await seedUsers();
        console.log("Super Admin created!");
    } else {
      console.log("Seeding not required");
    }
  } catch (error) {
    console.error("DB Connection or Seeding Error:", error);
  } 
  // finally {
  //   mongoose.disconnect();
  // }
};

module.exports = dbConnect;
