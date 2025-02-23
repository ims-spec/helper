// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { updateTodo } from "../../../toolkit/TodosSlice";

export default function TodosUpdate() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  // const { todos } = useSelector((state) => state.todos.todos);
  const navigate = useNavigate()
  const { id } = useParams();
  // const location = useLocation()
  const numericId = parseInt(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = numericId
    console.log("ID:" + id)
    dispatch(updateTodo({id, title, content}));
    // navigate("/todos")
  };

  //  useEffect(()=>{
  //   setContent("hello")
  //   console.log(content)
  //  }, [])

  return (
    <div className="m-auto" style={{ width: "40%" }}>
      <form onSubmit={handleSubmit} className="mt-3 ">
        <h1 className="h3 mb-3 fw-normal">Please edit todo</h1>
        {/* <h3>Id: {location.state.id}</h3> */}
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter title</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mt-1"
            id="floatingContent"
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="floatingContent">Enter content</label>
        </div>

        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
