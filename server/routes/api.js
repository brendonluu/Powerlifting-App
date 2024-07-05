import express from "express";
import db from "../db/connection.js";
import auth from "./auth.js"

const router = express.Router();

router.use("/auth", auth)

router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  results.push("yay!")
  res.send(results).status(200);
});

export default router;