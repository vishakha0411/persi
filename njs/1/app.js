var express = require('express');
var app = express();
var fs = require('fs');
var path=require('path');
app.use(express.static(__dirname))
app.use(express.json());

app.set('port', process.env.PORT || 3000);
const usersFilePath = path.join(__dirname, 'Students.json');

const readUsersFromFile = () => {
  const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
}
const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

const users = fs.readFileSync("Students.json",'utf-8');
const userObject=JSON.parse(users);
const detail=Object.entries(userObject);

// const findLastStudentKey = () => {
//   for (key of Object.keys(students)) {
//     const number = key.split("-")[1];
//     lastStudentKeyNumber = Math.max(lastStudentKeyNumber, number);
//   }
// };
//findLastStudentKey();
app.get("/listUsers", (req, res) => {
  res.send(users);
});

app.get("/showUser/:id",(req,res)=>{//"showUser/:userId" const id=req.params.userId
  const id=Number(req.params.id);
  // const user=detail.find((user)=>id==user[1].userId);
  // return res.send(JSON.stringify(user[1]));
  const key=`user-[id]`;
  if(key in users){
    return res.status(200).send(users[key]);
  }
  return res.status(400).send("Invalid data");
});


// app.post("/addStudent", (req, res) => {
//   // ik validation is must but, considering the time constraint.
//   const lastKey = `user-${lastStudentKeyNumber}`;
//   const newStudentId = users[lastKey].id + 1;
//   const newStudent = {
//     id: newStudentId,
//     ...req.body,
//   };
//   lastStudentKeyNumber++;
//   const newKey = `user-${lastStudentKeyNumber}`;
//   students[newKey] = newStudent;
//   writeUsersToFile();
//   return res.send("Student added");
// });

// app.patch("/updateUser/:id",(req,res)=>{
//   return res.json({status:"pending"});
// });

// app.delete("/deleteUser/:id",(req,res)=>{
//   return res.json({status:"pending"});
// });

app.listen(app.get('port'))
