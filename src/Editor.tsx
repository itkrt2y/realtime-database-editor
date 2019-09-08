import React, { useState, useCallback, useEffect } from "react";
import { database } from "./firebase";

// TODO
const postId = 1;

export function Editor() {
  const [loading, setLoading] = useState(true);
  const [body, setBody] = useState("");

  const db = database.ref(`posts/${postId}`);

  useEffect(() => {
    db.once("value").then(snapshot => {
      const data = snapshot.val();
      data ? setBody(data.body) : data.set({ body: body });
    });

    db.on("value", snapshot => {
      setBody(snapshot.val().body);
    });

    setLoading(false);
  }, []);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBody(event.target.value);
      db.update({ body: body });
    },
    [body]
  );

  return (
    <textarea
      value={body}
      onChange={onChange}
      style={{ width: "100%", height: "80%" }}
      disabled={loading}
    ></textarea>
  );
}
