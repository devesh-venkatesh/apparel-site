import express = require("express")
import mongoose = require("mongoose")

require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const connectionUri: string = require("./config/uri-connection")
// db config
mongoose
  .connect(connectionUri as string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongo DB connected")) // eslint-disable-line no-console
  .catch(console.error)

const adminRoutes = require("./routes/admin")

app.use("/admin", adminRoutes)

app.get("/", (req, res) => {
  res.send("Apparel Site REST API")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`) // eslint-disable-line no-console
})
