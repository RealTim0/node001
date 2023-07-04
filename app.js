const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressValidator = require("express-validator")
const bodyParser = require("body-parser")
const dotenv = require('dotenv');
dotenv.config()
 
//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true} 
)
.then(() => console.log('DB Connected'))
 
mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

const postRoutes = require("./routes/post")

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use("/", postRoutes)
app.use(expressValidator())

const port = process.env.PORT || 3456;
app.listen(port, ()=> {
  console.log("things are working out")
})