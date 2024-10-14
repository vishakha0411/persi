const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/Product");

const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/presistent-revision-appdb"
    );
    console.log("successfully connected to the database");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

connectToDB();

app.use(express.json());

app.use(productRouter);

app.listen(3000, () => console.log("server is running on port 3000"));

/*
const express = require('express')
require('./src/db/mongoose')
const employeeRouter = require('./src/routers/employee')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(employeeRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

*/