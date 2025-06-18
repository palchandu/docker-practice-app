// const express = require("express");
// const mongoose = require("mongoose");
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 8765;
const MONGO_URI = "mongodb://localhost:27017/todo-app";

/** import routes */
//const todoRoute = require("./routes/todo.route");
import todoRoute from "./routes/todo.route.js";
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

// Listen for connection events
db.on("connected", () => {
  console.log("✅ MongoDB connected successfully!");
});

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected");
});
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
/** register route */
app.use("/todo", todoRoute);

app.listen(PORT, () => {
  console.log(`Allpication is listening on http://localhost:${PORT}`);
});
