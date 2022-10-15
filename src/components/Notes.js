import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Notes = ({ note }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/viewnote", { state: note });
  };
  const handleEdit = () => {
    navigate("/editnote", { state: note });
  };

  const handleDelete = async () => {
    const { noteid } = note;
    await axios.delete("http://localhost:3500/notes/delete", {
      data: { noteid: noteid },
    });
    window.location.reload(false);
  };
  return (
    <div className="p-3 m-3 border-2 rounded-xl border-stone-800 max-w-3xl">
      <div className="flex justify-center text-2xl border-b border-stone-800">
        {note.notetitle}
      </div>
      <div className="text-lg border-b border-stone-800">{note.notebody.length > 55 ? note.notebody.slice(0, 56) : note.notebody}</div>
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
