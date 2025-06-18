import todoModel from "../models/todo.model.js";
export const addTodo = async (title, description) => {
  try {
    const todoPayload = {
      title,
      description,
    };
    const addRes = await todoModel.create(todoPayload);
    if (addRes) {
      return { status: true, message: "Todo added." };
    } else {
      return { status: false, message: "Todo not added." };
    }
  } catch (error) {
    console.log("errrr",error)
    return { status: false, message: "Error in add todo." };
  }
};

export const updateTodo = async (id, title, description) => {
  try {
    const todoPayload = {
      title,
      description,
    };
    const updateRes = await todoModel.updateOne(
      { _id: id },
      { $set: { title, description } }
    );
    if (updateRes) {
      return { status: true, message: "Todo updated." };
    } else {
      return { status: false, message: "Todo not updated." };
    }
  } catch (error) {
    return { status: false, message: "Error in update todo." };
  }
};
export const getTodo = async () => {
  try {
    const getTodoRes = await todoModel.find();
    if (getTodoRes) {
      return { status: true, message: "Todo found.", data: getTodoRes };
    } else {
      return { status: false, message: "Todo not found." };
    }
  } catch (error) {
    return { status: false, message: "Error in get todo." };
  }
};
export const deleteTodo = async (id) => {
  try {
    const deleteTodoRes = await todoModel.findByIdAndDelete(id);
    if (deleteTodoRes) {
      return { status: true, message: "Todo deleted." };
    } else {
      return { status: false, message: "Todo not deleted." };
    }
  } catch (error) {
    return { status: false, message: "Error in delete todo." };
  }
};
