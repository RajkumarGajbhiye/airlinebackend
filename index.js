const express = require('express')
 const mongoose = require('mongoose');
 const {router} = require("./routes/airlineRoute.js")
 const cors = require("cors")
 mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://Rajkumar04:R%40j18111@cluster0.tczbmho.mongodb.net/airline?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then(con => console.log("Database  connection established...."))

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(7000,()=> console.log("listening to 7k....."))
