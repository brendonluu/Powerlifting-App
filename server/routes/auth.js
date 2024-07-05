import express from "express";
import db from "./../db/connection.js"

const auth = express.Router();

auth.post("/signin", async (req, res) => {
  const { username, password } = req.body

  const users = await db.collection("users")
  const user = await users.findOne({
    "username": username,
    "password": password
  })
  if (user) {
    console.log("User found!");
    res.status(200).send(user)
  }
  else {
    console.log("User not found!");
    res.status(404).send()
  }
})

auth.post("/register", async (req, res) => {
  const { username, password } = req.body
  if(!username || !password)
    {
      res.status(400).send()
    }
  const users = await db.collection("users")
  let user = await users.findOne({ "username": username })
  if (user) {
    console.log("User exists!")
    res.status(409).send()
  }
  else {
    user = await users.insertOne({
      "username": username,
      "password": password
    })
    res.status(200).send(user)
  }
})


export default auth