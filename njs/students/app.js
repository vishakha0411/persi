





































//code in exp1
//  Event Id - ${target.eventId}  
// const eventIdMessage = 'Event Id - ' + target.eventId;/// <p>Event Id - {target['eventId']}</p> ///target['eventId']


const fs = require("fs");
const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3000);
var path = require("path");

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

app.post("/addStudent", (req, res) => {
  // ik validation is must but, considering the time constraint.
  const lastKey = `student-${lastStudentKeyNumber}`;
  const newStudentId = students[lastKey].id + 1;
  const newStudent = {
    id: newStudentId,
    ...req.body,
  };
  lastStudentKeyNumber++;
  const newKey = `student-${lastStudentKeyNumber}`;
  students[newKey] = newStudent;
  saveChanges();
  return res.send("Student added");
});

// to send all students details
app.get("/listStudents", (req, res) => {
  return res.status(200).send(JSON.stringify(students));
});

// to send the detail of
app.get("/studentDetails/:id", (req, res) => {
  const { id } = req.params;
  const key = `student-${id}`;
  if (key in students) {
    return res.status(200).send(JSON.stringify(students[key]));
  }
  return res.status(400).send("Invalid student id");
});


app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, DOB, mobileNumber, email ,DOJ} = req.body;
  if (!email) {
    return res.status(400).send("Email required");
  }
  const key = "student-"+id;
 // const key = `student-${id}`;
  if (key in students) {
    students[key].name = name;
    students[key].DOB = DOB;
    students[key].mobileNumber = mobileNumber;
    students[key].email = email;
    students[key].DOJ = DOJ;

    saveChanges();
    return res.status(200).send(JSON.stringify(students[key]));
  }
  return res.status(400).send("Invalid student ID");
});


app.patch("/updateEmail/:id", (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  if (!email) {
    return res.status(400).send("Email required");
  }
  const key = `student-${id}`;
  if (key in students) {
    students[key].email = email;
    saveChanges();
    return res.status(200).send(JSON.stringify(students[key]));
  }
  return res.status(400).send("Invalid student ID");
});
//  let id = req.params.id;
//let email = req.body.email;

app.delete("/removeStudent/:id", (req, res) => {
  // const { id } = req.params;
  // const key = `student-${id}`;
  let id = req.params.id;
  let key = "student-" + id;
  if (key in students) {
    delete students[key];
    saveChanges();
    return res.status(200).send("Student removed");
  }
  return res.status(400).send("Invalid student id");
});

app.listen(app.get("port"));

/*
app.post("/students", function (req, res) { 
  var student = req.body; 
    
  students.push(student); 
    
  res.json({ message: "Record Added" }); 
});

app.put("/students/:id", function (req, res) { 
  var id = req.params.id; 
    
  var student = req.body; 
    
  // updating user with the specific id 
  for (var i = 0; i < students.length; i++) { 
    if (students[i].id == id) { 
      students[i] = student; 
      break; 
    } 
  } 
    
  res.json({ message: "Record Updated" }); 
});

app.delete("/removeStudent/:id", function(req, res) {
  let id = req.params.id;
  let key = "student-" + id;  // Changed template literal to string concatenation

  if (students.hasOwnProperty(key)) {
    delete students[key];
    saveChanges();
    return res.status(200).json({ message: "Student removed" });
  }

  return res.status(400).json({ error: "Invalid student id" });
});


app.patch("/update/:id", function(req, res) {
  let id = req.params.id;
  let email = req.body.email;

  if (!email) {
    return res.status(400).send("Email required");
  }

  let key = "student-" + id;  // Changed template literal to string concatenation

  if (students.hasOwnProperty(key)) {
    students[key].email = email;
    saveChanges();
    return res.status(200).send(JSON.stringify(students[key]));
  }

  return res.status(400).send("Invalid student ID");
});


app.put("/update/:id", function(req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let DOB = req.body.DOB;
  let mobileNumber = req.body.mobileNumber;
  let email = req.body.email;
  let DOJ = req.body.DOJ;

  if (!email) {
    return res.status(400).send("Email required");
  }

  let key = "student-" + id;  // Changed template literal to string concatenation

  if (students.hasOwnProperty(key)) {
    students[key].name = name;
    students[key].DOB = DOB;
    students[key].mobileNumber = mobileNumber;
    students[key].email = email;
    students[key].DOJ = DOJ;

    saveChanges();
    return res.status(200).send(JSON.stringify(students[key]));
  }

  return res.status(400).send("Invalid student ID");
});


Here’s a complete list with the requested status codes included:

- **HTTP 200 (OK)**: The request was successful, and the server returned the requested resource.
- **HTTP 201 (Created)**: The request was successful, and a new resource was created as a result.
- **HTTP 202 (Accepted)**: The request has been accepted for processing, but the processing is not complete yet.
- **HTTP 204 (No Content)**: The request was successful, but there is no content to return.

- **HTTP 301 (Moved Permanently)**: The resource has been permanently moved to a new URL.
- **HTTP 302 (Found)**: The resource has been temporarily moved to another URL.
- **HTTP 304 (Not Modified)**: The requested resource has not been modified since the last access.

- **HTTP 400 (Bad Request)**: The server cannot process the request due to a client error (e.g., invalid syntax).
- **HTTP 401 (Unauthorized)**: Authentication is required, and the provided credentials are invalid.
- **HTTP 403 (Forbidden)**: The server understands the request but refuses to authorize it.
- **HTTP 404 (Not Found)**: The server can't find the requested resource.

- **HTTP 500 (Internal Server Error)**: A generic server error occurred.
- **HTTP 501 (Not Implemented)**: The server does not support the functionality required to fulfill the request.
- **HTTP 502 (Bad Gateway)**: The server, while acting as a gateway, received an invalid response from the upstream server.
- **HTTP 503 (Service Unavailable)**: The server is temporarily unavailable, typically due to overload or maintenance.
- **HTTP 504 (Gateway Timeout)**: The server, while acting as a gateway, did not receive a timely response from the upstream server.
*/