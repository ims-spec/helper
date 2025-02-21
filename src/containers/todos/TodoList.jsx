import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/TodosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    console.log(todos)
    
    dispatch(fetchTodos());
  console.log(dispatch(fetchTodos))
}, [dispatch]);

  if (status === "loading") return <div>Loading ...</div>;
  if (status === "succeeded") return <div>Succeeded ...</div>;
  if (status === "failed") return <div>Error {error}</div>;

//   return (
//     <div>
//         <h1>Todo list</h1>
//       <ul>
//         {todos.map((item, index)=>{
//            return <li key={index}>{item.title}</li>
//         })}
//       </ul>
//     </div>
//   );
}
