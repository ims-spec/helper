import { useContext } from "react";

import {
  InputEmailContext,
  InputPasswordContext,
} from "../context/InputContext";

import useInput from "../hooks/useInput";

export default function InputForm({ id, type, placeholder, label }) {
  const {value, updateValue} = useInput("");

  const { setEmail } = useContext(InputEmailContext);
  const { setPassword } = useContext(InputPasswordContext);
  // let email = ''
  // let password = ''

  const handler = (e) => {
    // setEmail(value);
    // setPassword(value);
    updateValue(e.target.value);
  };

  return (
    <>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={handler}
        value={value}
      />
      <label htmlFor={label}>{type}</label>
    </>
  );
}
