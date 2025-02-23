import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../toolkit/authSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  };

  return (
    <main
      className="form-signin m-auto "
      style={{ width: "25%", marginTop: "300px" }}
    >
      <form onSubmit={handleSubmit} className="mt-3 ">
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        {error && <p>{error}</p>}
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mt-1"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
      </form>
    </main>
  );
};

export default SignUp;
