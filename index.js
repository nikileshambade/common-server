const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const errorHandler = require("./middlewares/error");

const userRouter = require('./routes/user.route');

const db = mongoose.connect("mongodb://localhost:27017/blog", 
  { useNewUrlParser: true,
    useUnifiedTopology: true
  });

//required middleware
app.use(cors());
app.use(express.json());

// add router
app.use('/user', userRouter);

app.get("/", (req, res)=> {
  res.send("Hello server")
});

// Error Handling
app.use(errorHandler);

app.listen(3002, () => {
  console.log('Server is listening on 3002')
})