const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Model/user');
const Role = require('../Model/role');
const Menu = require('../Model/menu');
const {dbConnect} = require("../config/db")

const seedDatabase = async () => {
    try {
        await dbConnect();

        // Clear existing data
        await User.deleteMany({});
        await Role.deleteMany({});
        await Menu.deleteMany({});

        // Define menus
        const menus = ['user', 'role', 'chat', 'report', 'about', 'setting', 'service'];
        const menuDocs = await Menu.insertMany(menus.map(name => ({ name })));

        // Create roles
        const superAdminMenus = menuDocs.map(menu => menu.name);
        const userMenus = menuDocs.filter(menu => !['user', 'role'].includes(menu.name)).map(menu => menu.name);

        const roles = [
            { name: 'superAdmin', menus: superAdminMenus },
            { name: 'user', menus: userMenus }
        ];

        const [superAdminRole, userRole] = await Role.insertMany(roles);

        // Create SuperAdmin user
        const hashedPassword = await bcrypt.hash('superAdminpassword', 10); 
        const superAdmin = new User({
            firstName: 'Super',
            lastName: 'Admin',
            email: 'superadmin@example.com', 
            password: hashedPassword,
            role: superAdminRole._id
        });

        await superAdmin.save();
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database', err);
        process.exit(1);
    }
};

seedDatabase();
