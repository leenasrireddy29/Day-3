// const users = ["leena" ,"ashu" ,"srujana" ,"anjali"];
// console.log(users[0]);
// console.log(users[1]);
// for (let i=0;i <users.length;i++){
//     console.log(users[i]);
// }
// let x=users.map((user)=>{
//     console.log(user);
//     return user;
// });
// console.log(x);
// const users = ["leena","ashuu","srujana","anjali"];
// users.push("yamini");
// console.log(users);
// users.pop();
// console.log(users);
// users.unshift("ashhh");
// console.log(users);
// users.shift("sam");
// console.log(users);
// let x = users.join(" ");
// console.log(x, typeof(x));
// let frontend =["html","css","js","reactjs","angular"];
// let backend=["nodejs","expressjs","java","golang"];
// let fullstack=frontend.concat(backend);
// console.log(fullstack);
// let userDetails={
//     name:"leena",
//     age:20,
//     address:{
//         area:"siddipet",
//         streetno:"2",
//         pincode:"502103",
//     }

// };
// console.log(userDetails.address.area);
// let userDetails ={
//     name:"ankith",
//     age:25,
//     city:"hyd",

// }
// console.log(userDetails);
// console.log(typeof(userDetails));
// let x=JSON.stringify(userDetails);
// console.log(x);
// let y=JSON.parse(x);
// console.log(y);
localStorage.setItem("user1","Leena");
localStorage.setItem("user2","ashh");
localStorage.setItem("user3","sujjii");
localStorage.setItem("user4","anjali");
localStorage.setItem("user5","rishii");
localStorage.setItem("user6","riyaa");

let user6=localStorage.getItem("user6");
console.log(user6);
localStorage.removeItem("user1");