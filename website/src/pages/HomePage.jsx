import React, { useState, useEffect, useContext, useCallback } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);

  const getNotes = useCallback(async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/notes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });

      const data = await response.json();

      if (response.ok) {
        setNotes(data);
      } else if (response.status === 401) {
        logoutUser();
      } else {
        throw new Error("Failed to fetch notes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  }, [authTokens.access, logoutUser]);


 
  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <div>
      <p>You are logged into the home page</p>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
