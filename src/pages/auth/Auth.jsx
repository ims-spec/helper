import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [log, setLog] = useState();

  const changeHandler = () => {
    setLog(!log);
  };

  return log ? (
    <>
      <SignIn />
      <div
        className="m-auto align-items-center d-flex"
        style={{ width: "25%", marginTop: "300px" }}
      >
        <span>Создать аккаунт</span>
        <button onClick={changeHandler} className="btn btn-link">
          Sign up
        </button>
      </div>
    </>
  ) : (
    <>
      <SignUp />
      <div
        className="m-auto align-items-center d-flex"
        style={{ width: "25%", marginTop: "300px" }}
      >
        <span>У Вас уже есть аккаунт?</span>
        <button onClick={changeHandler} className="btn btn-link">
          Sign in
        </button>
      </div>
    </>
  );
};

export default Auth;
