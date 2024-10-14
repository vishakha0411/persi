app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.get('/books', (req, res) => {
    res.json(books);
});

app.delete('/book/:id', (req, res) => {
    // Reading isbn from the URL
    const id = req.params.id;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Use the port provided by the host or default to 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Define a route to handle incoming requests
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  app.use(express.json());

  // Create (POST) a new item
  app.post('/items', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
  });
  
  // Read (GET) all items
  app.get('/items', (req, res) => {
    res.json(data);
  });
  
  // Read (GET) a specific item by ID
  app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find((item) => item.id === id);
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(item);
    }
  });
  
  // Update (PUT) an item by ID
  app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      data[index] = { ...data[index], ...updatedItem };
      res.json(data[index]);
    }
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

  app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      const deletedItem = data.splice(index, 1);
      res.json(deletedItem[0]);
    }
});

/*
POST http://localhost:3000/items
Body: { "name": "New Item" }

GET http://localhost:3000/items

GET http://localhost:3000/items/1

PUT http://localhost:3000/items/1
Body: { "name": "Updated Item" }

DELETE http://localhost:3000/items/1
*/

/*
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Server port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
Step 4: Define API Routes
In this step, we will create routes for handling various API endpoints. For demonstration purposes, we will create routes to handle CRUD operations for a collection of users.

Create a new file named users.js inside a folder named routes in your project directory. This file will contain the API routes related to users.
const express = require('express');
const router = express.Router();

// Sample user data (temporary)
let users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  // Add more users as needed
];

// Get all users
router.get('/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// Create a new user
router.post('/users', (req, res) => {
  const { name, age } = req.body;

  // Simple validation
  if (!name || !age) {
    return res.status(400).json({ message: 'Name and age are required' });
  }

  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Update an existing user by ID
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

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.sendStatus(204);
});

module.exports = router;
*/


const restusers= users.filter(user=>user.id!==targetId);
console.log(restusers);

const username=users.map(user=>user.name);
console.log(username);
const newarr=fruits.push('orange');
const firstele=fruits.shift();
console.log(fruits);
console.log(firstfruit);

Array.sort((a,b)=>a-b);
console.log(arr);

const person={
  name:"John",
  Lastname:"Doe",
  age:30,
  occupation:"Developer"
};

if('age' in person){
  console.log("present");
}
if(Object.hasOwnProperty('name')){
  console.log("key present");
}
console.log(JSON.stringify(person));
const str = '{"name":"John","age":30,"occupation":"Developer"}';
console.log(JSON.parse(str));

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // Creates a shallow copy of arr1
console.log(arr2);  // Output: [1, 2, 3]

const arr3 = [0, ...arr1, 4];
console.log(arr3);  // Output: [0, 1, 2, 3, 4]

//copying an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  
console.log(obj2);

const numbers = [1,2,3];
function sum(x,y,z){
  return x+y+z;
}
console.log(sum(...numbers));

function add(...nums){
  return nums.reduce((sum,num)=> sum+num, 0);
}
console.log(add(1,2,3));
// reduce() method is used to process all the elements of an array and accumulate a single result. 
// Arrays: The spread operator helps copy, combine, and insert array elements.
// Objects: It allows you to copy or merge objects, and update properties.
// Functions: It enables passing an array as arguments and gathering multiple arguments into an array.

for(const ele of array){
  console.log(ele);
}

// File: math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };  // Exporting the add function

// File: app.js
const math = require('./math');  // Importing the math module

const result = math.add(5, 10);
console.log(result);  // Output: 15

// using ES6 
// File: math.mjs
export function add(a, b) {
  return a + b;
}

// File: app.mjs
import { add } from './math.mjs';
const result = add(5, 10);
console.log(result);  // Output: 15

//read file asynchronously
const fs = require('fs');
const filecontent = fs.readFileSync('./sample.txt','utf-8');
console.log(filecontent);

//read file synchronously
fs.readFile("./sample.txt", "utf-8", (err, data)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(content);
});

//read file asynchronously with promises
const fs= require('fs').promises;

//read file async with promises
const readFileContent= async()=>{
  try{
    const fileContent = await fs.readFile("./sample.txt", 'utf-8');
    console.log(fileContent);
  }
  catch(e){
    console.log(e);
  }
}
readFileContent();
//write content to file sync
const fs=require('fs');
const contentTowrite="This is the file content";
fs.writeFileSync("./sample.txt", contentToWrite);

//write file async
const fs=require('fs');
const contentToWrite = "This data is to be written";

fs.writeFile("./sample.txt",contentToWrite,(err)=>{
  if(err){
    console.log(err);
  }
})

//append to file sync
fs.appendFileSync('./sample.txt', contentToWrite)

//append to file async
fs.appendFile('./sample.txt', contentToWrite, (err)=>{
  if(err){
    console.log(err);
  }
})

//Event Emitter
// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event listener for the 'greet' event
eventEmitter.on('greet', () => {
  console.log('Hello, someone greeted!');
});
eventEmitter.emit('greet');  // Output: Hello, someone greeted!


//withparameter
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
eventEmitter.emit('greet', 'Alice');  // Output: Hello, Alice!
