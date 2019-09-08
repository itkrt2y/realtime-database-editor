import React, { useState, useCallback, useEffect } from "react";
import { db } from "./firebase";

// FIXME
const dbRef = "posts/1";

export function Editor() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    db.ref(dbRef)
      .once("value")
      .then(snapshot => {
        setValue(snapshot.val().body);
        setLoading(false);
      });
  }, []);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
      db.ref(dbRef).set({ body: value });
    },
    [value]
  );

  return (
    <textarea
      value={value}
      onChange={onChange}
      style={{ width: "100%", height: "80%" }}
      disabled={loading}
    ></textarea>
  );
}
