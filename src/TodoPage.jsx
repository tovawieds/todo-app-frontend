import axios from "axios";
import { useState, useEffect } from "react";
import { TodoIndex } from "./TodoIndex";

export function PhotosPage() {
  const [todos, setTodos] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");

    axios.get("./todos.json").then((response) => {
      console.log("response.data");
    });
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <TodoIndex todos={todos} />
    </main>
  );
}