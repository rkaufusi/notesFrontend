import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const CreateNote = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [note, setNote] = useState({
    notetitle: "",
    notebody: "",
    token: "",
  });

	useEffect(() => {
		let userToken = localStorage.getItem("user");
		setNote({ ...note, token: userToken });
	}, []);

	

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
			console.log("token " + note.token);

      console.log(
        "front end note " + note.notetitle + note.notebody + note.token
      );
      const result = await axios.post(
        "http://localhost:3500/notes/create",
        note
      );
      console.log(result);
      navigate("/home");
    } catch (error) {
      console.log(error);
      //navigate("/home")
    }
  };

  return (
		<div className="bg-gradient-to-r from-slate-100 h-screen">
    <div className="p-3 m-3 border-2 rounded-xl border-stone-800 max-w-6xl ">
      <form className="flex flex-col">
        <input
          onChange={(event) =>
            setNote({ ...note, notetitle: event.target.value })
          }
          className="flex justify-center text-2xl border-b border-stone-800"
          placeholder="Note title"
        ></input>
        <input
          onChange={(event) =>
            setNote({ ...note, notebody: event.target.value })
          }
          className="text-lg border-b border-stone-800"
          placeholder="Note body"
        ></input>
        <button
          onClick={(event) => handleSubmit(event)}
          className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white max-w-fit"
        >
          Save
        </button>
      </form>
    </div>
		</div>
  );
};

export default CreateNote;
