const User = require("../Model/user");
const Role = require("../Model/role");
const bcrypt = require("bcrypt");

const userData = {
    firstName: "Super",
    lastName: "Admin",
    email: 'superAdmin@gmail.com',
    password: '12345',
};

const roleData = {
    name: "superAdmin",
    menus: ["about", "user", "report", "service", "chat", "role", "setting"],
};
const userRole = {
    name: "user",
    menus: ["about", "report", "service", "chat", "setting"],
};

const shouldSeedUsers = async () => {
    const usersCount = await User.countDocuments().exec();
    return usersCount === 0; 
};

const seedUsers = async () => {
    const existingUser = await User.findOne({ email: userData.email }).exec();
    if (existingUser) {
        console.log(`User with email ${userData.email} already exists. Skipping creation.`);
        return existingUser;
    }
    const isUserRole = await Role.findOne({name:userRole.name});
    if(isUserRole==null){
        const role = await Role.create(userRole);
    }

    const role = await Role.create(roleData);
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await User.create({ ...userData,password:hashedPassword, roleId: role._id });

    return [role, user];
};

module.exports = { shouldSeedUsers, seedUsers };
