import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Notes from "../components/Notes";
const UserHome = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      let result = await axios.get("http://localhost:3500/notes/getnotes");
      console.log(result.data);
      setNotes(result.data);
    };
    getNotes();
  }, []);
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center">
        {notes.map((note) => {
          return <Notes note={note} />;
        })}
      </div>
    </>
  );
};

export default UserHome;
