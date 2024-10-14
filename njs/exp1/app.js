var express = require("express");
var app = express();
var fs = require("fs");
app.set("port", process.env.PORT || 3000);
var path = require("path");
//fill your code

const users = fs.readFileSync("users.json",'utf-8');
const userObject=JSON.parse(users)
const detail=Object.entries(userObject)

const readUsersFromFile = () => {
  const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
}
const fs = require('fs');
const filePath = './users.json'; // Path to the file where users are stored

// Function to write users array to users.json
const writeUsersToFile = (users) => {
  const data = JSON.stringify(users, null, 2); // Convert the users object/array to a JSON string
  fs.writeFileSync(usersFilePath, data, 'utf8'); // Write the JSON string to the file
}

app.get("/listUsers", (req, res) => {
  res.send(users);
});

app.get("/showUser/:id", (req, res) => {
  const id = req.params.id;
  const findD=detail.find((d)=>id==d[1].userId)
  if(findD){
    res.send(JSON.stringify(findD[1]));
    
  }
  else{
    res.send('User is not found')
  }

});

app.post('/addUsers', (req, res) => {
  const newUser = req.body;
  if (!newUser.firstName || !newUser.email || !newUser.age) {
      return res.status(400).json({ error: 'Name, email, age and all details are required.' });
  }
  const users = readUsersFromFile();
  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: 'User added successfully!', user: newUser });
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.find((user) => users.id === id);
  users.splice(index,1);

  // fs.writeFileSync('users.json',JSON.stringify(newFinD))
  // res.send(JSON.stringify(newFinD));
});

app.delete('/deleteUsers/:id',(req,res)=>{
  const id = req.params.id;

  const findD=detail.filter((d)=>id!==d[1].userId)
  if(findD){
    newFinD=Object.fromEntries(findD)
    fs.writeFileSync('users.json',JSON.stringify(newFinD))
    res.send(JSON.stringify(newFinD));
    
  }

 
})
app.listen(app.get("port"));