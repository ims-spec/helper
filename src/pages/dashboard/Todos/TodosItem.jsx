import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../toolkit/TodosSlice";
import { Link } from "react-router";

export default function TodosItem({ title, con, id }) {
  const dispatch = useDispatch();

  const deleteHandler = (recordId) => {
    dispatch(deleteTodo(recordId));
  };

  return (
    <div className="d-flex shadow-lg p-3 justify-content-between mb-3">
      <div>
        <h5 className="text-primary">{id}. {title}</h5>
        <p>{con}</p>
      </div>
      <div>
        <Link
          className="btn btn-primary me-5"
          to={{ pathname: `${id}/edit`, state: { id: id } }}
        >
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => deleteHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
