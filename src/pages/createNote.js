import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const CreateNote = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

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

      const result = await axios.post(
        "http://localhost:3500/notes/create",
        note
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
      navigate("/home");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-slate-100 h-screen">
      <div className="px-6 p-3 m-3 border-2 rounded-xl border-stone-800 max-w-6xl ">
        <form className="flex flex-col">
          <input
            onChange={(event) =>
              setNote({ ...note, notetitle: event.target.value })
            }
            className="flex justify-center rounded-lg text-2xl border border-stone-800 p-1 m-1"
            placeholder="Note title"
          ></input>
          <textarea
            onChange={(event) =>
              setNote({ ...note, notebody: event.target.value })
            }
            className="rounded-lg text-lg border border-stone-800 p-1 m-1"
            placeholder="Note body"
          ></textarea>
          <div className="flex-row">
            <button
              onClick={(event) => handleSubmit(event)}
              className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white max-w-fit"
            >
              Save
            </button>
            <button
              onClick={() => navigate("/home")}
              className="px-3  text-lg bg-sky-600 rounded-md text-white max-w-fit"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
