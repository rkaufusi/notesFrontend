import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const EditNote = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [note, setNote] = useState({
    noteid: state.noteid,
    notetitle: state.notetitle,
    notebody: state.notebody,
  });

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.put("http://localhost:3500/notes/edit", note);
      console.log(result);
      navigate("/home");
    } catch (error) {
      console.log(error);
      //navigate("/home")
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-100 h-screen">
      <div className=" p-3 m-3 border-2 rounded-xl border-stone-800 max-w-6xl">
        <form className="flex flex-col">
          <input
            onChange={(event) =>
              setNote({ ...note, notetitle: event.target.value })
            }
            className="flex justify-center text-2xl border-b border-stone-800"
            value={note.notetitle}
          ></input>
          <input
            onChange={(event) =>
              setNote({ ...note, notebody: event.target.value })
            }
            className="text-lg border-b border-stone-800"
            value={note.notebody}
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

export default EditNote;
