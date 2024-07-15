const User = require("../Model/user");
const Role = require("../Model/role");
const bcrypt = require("bcrypt");

    const userData = {
        firstName: "Super",
        lastName: "Admin",
        email: 'superAdmin@gmail.com',
        password: '12345',
    };

    const superAdminRoleData = {
        name: "superAdmin",
        menus: ["about", "user", "report", "service", "chat", "role", "setting"],
    };
    const userRoleData = {
        name: "user",
        menus: ["about", "report", "service", "chat","setting"],
    };

// seeding user role
    const shouldSeedUserRole = async()=>{
        const userRole = await Role.find({name:userRoleData.name});
        return  userRole.length==0
    }
    const seedUserRole =async()=>{
        const userRole = new Role({
            name: userRoleData.name,
            menus: userRoleData.menus
        });
        const seedUserRole = await userRole.save();
    }

// seeding superAdmin role
    const shouldSeedSuperAdminRole = async()=>{
        const superAdminRole = await Role.find({name:superAdminRoleData.name});
        return  superAdminRole.length==0
    }
    const seedSuperAdminRole =async()=>{
        const superAdminRole = new Role({
            name: superAdminRoleData.name,
            menus: superAdminRoleData.menus
        });
        const seedSuperAdminRole = await superAdminRole.save();
    }

// seeding superAdmin
    const shouldSeedUsers = async () => {
		const users = await User.find().exec();
        const result = await Promise.all(users.map(async (user) => {
            const role = await Role.findById(user?.roleId).exec();
            return {
                id: user?._id,
                firstName: user?.firstName,
                lastName: user?.lastName,
                email: user?.email,
                role: role ? role?.name : null,
                menu: role ? role?.menus : null,
            };
        }));
        const filteredUser = result?.filter((item)=> item.role==superAdminRoleData.name)
        return filteredUser.length === 0;
    };
    const seedUsers = async () => {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
		const userRoleId = await Role.findOne({ name:superAdminRoleData.name  }, { _id: 1 });

        if(userRoleId){
			const user = new User({
				firstName:userData.firstName,
				lastName:userData.lastName,
				email:userData.email,
				password: hashedPassword,
				roleId: userRoleId,
			});
			const savedUser = await user.save();
            console.log(savedUser,"savedUser")
		}
    };

module.exports = { shouldSeedUsers, seedUsers,shouldSeedUserRole,seedUserRole,shouldSeedSuperAdminRole,seedSuperAdminRole };
