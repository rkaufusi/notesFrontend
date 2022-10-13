import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Notes from "../components/Notes";
const UserHome = () => {
  const [notes, setNotes] = useState([]);
  const [fetch, setFetch] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      let userToken = localStorage.getItem("user");
      let result = await axios.get("http://localhost:3500/notes/getnotes", {
        params: { 
					token: userToken 
				}
      });
      setNotes(result.data);
    };
    if (fetch) getNotes();
    setFetch(false);
  }, [notes]);
  return (
    <>
      <Nav />
      <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 h-screen">
        {notes.map((note) => {
          return <Notes note={note} setFetch={setFetch} />;
        })}
      </div>
    </>
  );
};

export default UserHome;
