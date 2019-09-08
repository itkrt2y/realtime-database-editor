import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

const Editor = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    },
    [value]
  );

  return (
    <textarea
      value={value}
      onChange={onChange}
      style={{ width: "100%", height: "80%" }}
    ></textarea>
  );
};

const App = () => (
  <>
    <h1>Editor</h1>
    <Editor />
  </>
);

ReactDOM.render(<App />, document.querySelector("#app")!);
