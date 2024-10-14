const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json()); // body parser
// We store the file content into a variable named students and whenever there is any updates,
// in it we will call saveChages function

let students = {};
let lastStudentKeyNumber = 0;

const readData = () => {
  // since the json file content will be json string we need to parse it, to convert it into javascript object
  students = JSON.parse(fs.readFileSync("./Students.json", "utf-8"));
};

readData();

const findLastStudentKey = () => {
  for (key of Object.keys(students)) {
    const number = key.split("-")[1];
    lastStudentKeyNumber = Math.max(lastStudentKeyNumber, number);
  }
};
findLastStudentKey();

// console.log(lastStudentKeyNumber);

const saveChanges = () => {
  // important note: We need to first stringify the javascript object before writing to a json file
  fs.writeFileSync("./Students.json", JSON.stringify(students));
};

app.delete("/removeStudent/:id", (req, res) => {
    const { id } = req.params;
    const key = student-${id};
    if (key in students) {
      delete students[key];
      saveChanges();
      return res.status(200).send("Student removed");
    }
    return res.status(400).send("Invalid student id");
  });

  app.patch("/updateEmail/:id", (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    if (!email) {
      return res.status(400).send("Email required");
    }
    const key = student-${id};
    if (key in students) {
      students[key].email = email;
      saveChanges();
      return res.status(200).send(JSON.stringify(students[key]));
    }
    return res.status(400).send("Invalid student ID");
  });

  router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  // Simple validation
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  user.name = name;
  user.age = age;
  res.json(user);
});
/*
var express = require('express')
var app = express()
var fs = require('fs')
app.set('port', process.env.PORT || 3000)

//fill your code

jsonData = null

fs.readFile("users.json",  encoding='utf8', (err, data) => {
    if (err){
        console.log(err)
    }
    else{
        console.log(data)
        jsonData=JSON.parse(data)
    }
})

app.get("/listUsers", (req, res)=>{
    res.send(JSON.stringify(jsonData))
})

app.get("/showUser/:id", (req, res)=>{
    if (jsonData.hasOwnProperty(user-${req.params.id})){
        res.send(JSON.stringify(jsonData[user-${req.params.id}]))
    }
    else{
        res.send("User is not found")
    }
       
})

app.use("/deleteUser/:id", (req, res)=>{
    delete jsonData[user-${req.params.id}]
    fs.writeFile("users.json", JSON.stringify(jsonData), (err)=>{
        if (err){
           res.send(err)
        }
        else{
            res.send(fs.readFileSync("users.json", "utf8"))
        }
    })
})

app.listen(app.get('port'))
*/