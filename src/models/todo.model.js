import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enums: ["pending", "completed"],
    required: true,
    default: "pending",
  },
});
const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
