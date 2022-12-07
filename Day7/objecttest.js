var user ={
    firstname: "silpi",
    lastname: "sahoo",
    role: "admin",
    logincount: 32,
    facebooklogin: true,
};
console.log(user.firstname);
console.log(user["lastname"]);

console.log(user.logincount);
user.logincount=22,
console.log(user.logincount);
console.table(user);