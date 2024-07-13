const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      role: "User",
      email: "jon@example.com",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      role: 42,
      email: "cersei@example.com",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      role: 45,
      email: "jaime@example.com",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      role: 16,
      email: "arya@example.com",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      role: 4,
      email: "daenerys@example.com",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: "John",
      role: 150,
      email: "melisandre@example.com",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      role: 44,
      email: "ferrara@example.com",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      role: 36,
      email: "rossini@example.com",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      role: 65,
      email: "harvey@example.com",
    },
  ];

  const Roles =[
    {
      name:"SuperAdmin",
      value:"superAdmin"
    },
    {
      name:"User",
      value:"user"
    },
    {
      name:"Client",
      value:"client"
    },
    {
      name:"Manager",
      value:"manager"
    },
    {
      name:"Hr",
      value:"hr"
    },
  ]

  const roleList =[
    {
      id : 1,
      name :"superAdmin",
      menus :["user","role","chat","report","about","setting","service"]
    },
    {
      id : 2,
      name :"user",
      menus :["chat","report","about","setting","service"]
    },
    {
      id : 3,
      name :"client",
      menus :["chat","report","about","setting","service"]
    },
    {
      id : 4,
      name :"hr",
      menus :["chat","report","about","setting","service"]
    },
  ]
  
const Constant ={
    rows,Roles,roleList
}

export default Constant;