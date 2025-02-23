import React, { useState } from "react";
import supabase from "../../supabase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = async ({ email, password }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setLoading(true);
      if (error) throw error;

      return data;
    } catch (error) {
      return setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <main
      className="form-signin m-auto "
      style={{ width: "25%", marginTop: "300px" }}
    >
      <form onSubmit={handleSubmit} className="mt-3 ">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
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

        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2025</p>
      </form>
    </main>
  );
};

export default SignIn;
