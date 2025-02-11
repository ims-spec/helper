import { useState } from "react";

export default function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return { value, updateValue };
}
