import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Notes = ({ note }) => {
  const navigate = useNavigate();
  const [userNote, setUserNote] = useState({
    notetitle: "",
    notebody: "",
    noteid: ""
  });
  const handleView = (note) => {

    console.log(userNote);
    navigate("/viewnote", { state: note });
  };
  const handleEdit = () => {
		console.log(userNote);
    navigate("/editnote", { state: note });
	};

  const handleDelete = () => {};
  return (
    <div className="p-3 m-3 border-2 rounded-xl border-stone-800">
      <div className="flex justify-center text-2xl border-b border-stone-800">
        {note.notetitle}
      </div>
      <div className="text-lg border-b border-stone-800">{note.notebody}</div>
      <div className="pt-2">
        <button
          onClick={() => handleView(note)}
          className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white"
        >
          View
        </button>
        <button
          onClick={(note) => handleEdit(note)}
          className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white"
        >
          Edit
        </button>
        <button
          onClick={(note) => handleDelete(note)}
          className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Notes;
