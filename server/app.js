if (process.env.NODE_ENV === "development") {
    require("dotenv").config()
}

const express = require("express")
const mongoose = require("mongoose")
const errorHandler = require("./middlewares/errorHandler")
const routes= require("./routers")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
// \process.env.MONGOOSE_URL ||
let mongoosedb =  process.env.MONGOOSE_URL 
mongoose.connect("mongodb+srv://mongoose:mongoose@hackitv8-z8u8c.gcp.mongodb.net/hacktivoverflow?retryWrites=true&w=majority", mongooseConfig)
    .then((result) => {
        console.log("database connected")    
    })
    .catch((err) => {
        console.log(err)
    });

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan("dev"))

app.use("/", routes)

app.use(errorHandler)
app.listen(3000, () => {
    console.log("connect")
})
module.exports = app