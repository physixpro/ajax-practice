// require("dotenv").config()
// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const app = express();
// const ObjectID = require("mongodb").ObjectID;
// app.use(cors())
// app.use(express.urlencoded({ extended: true}))

// mongoose.connect("mongodb+srv://data:1234@cluster0.qvhok.mongodb.net/Facebook?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true})
// const db = mongoose.connection 

// db.on("error", console.error.bind(console, "connection error"))
// db.once("open", function callback() {
//     console.log("database is up and running")
// })

// app.get("/feed", async (req,res) => {
//     const feed = await db.collection("feed").find({}).toArray();
//     res.json(feed)
// })







// const port = process.env.PORT || 3001
// app.listen(port, () => console.log(`Server is running on port ${port}...`))

// require("dotenv").config
// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// const cors = require("cors")
// const ObjectID = require("mongodb").ObjectID
// app.use(express())
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// mongoose.connect("mongodb+srv://data:1234@cluster0.qvhok.mongodb.net/Facebook?retryWrites=true&w=majority",{useUnifiedTopology:true, useNewUrlParser:true})
// const db = mongoose.connection 

// db.on("error", console.error.bind(console, "connection error"))
// db.once("open", function callback () {
//     console.log("database is up and running")
// })

// app.get("/feed", async(req,res) => {
//     const feed = db.collection("feed").find({}).toArray()
//     res.json(feed)
// })


// const port = process.env.PORT = 3001
// app.listen(port, () => console.log(`server is runnign on port ${port}...`))

const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const ObjectID = require("mongodb").ObjectID;
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect("mongodb+srv://data:1234@cluster0.qvhok.mongodb.net/Facebook?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser:true})
const db = mongoose.connection

db.on("error", console.error.bind(console,"connection error"))
db.once("open", function callback() {
    console.log("database is up and running")
})

app.get('/feed', async(req,res) => {
    const feed = await db.collection("feed").find({}).toArray();
    res.json(feed)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is running on port ${port}`))