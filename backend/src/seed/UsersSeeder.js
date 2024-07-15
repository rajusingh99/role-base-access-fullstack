const User = require("../Model/user");
const Role = require("../Model/role");
const UserRole = require("../model/userRole");

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

    const existingRole = await Role.findOne({ name: roleData.name }).exec();
    if (existingRole) {
        console.log(`Role with name ${roleData.name} already exists. Skipping creation.`);
        return existingRole;
    }

    const role = await Role.create(roleData);

    const user = await User.create({ ...userData, roleId: role._id });

    await UserRole.create({ roleId: role._id, userId: user._id });

    return [role, user];
};

module.exports = { shouldSeedUsers, seedUsers };
