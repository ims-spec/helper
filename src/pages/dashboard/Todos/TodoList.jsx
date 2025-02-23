import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../../toolkit/TodosSlice";
import TodosItem from "./TodosItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodos());
    console.log(todos);
  }, [dispatch]);

  if (status === "loading") return <div>Loading ...</div>;

  if (status === "succeeded")
    return (
      <>
        {todos.map((item) => (
          <TodosItem key={item.id} title={item.title} con={item.content} id={item.id}/>
        ))}
      </>
    );
  if (status === "failed") return <div>Error {error}</div>;
}
