import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const ViewNote = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [title, setTitle] = useState(state.notetitle);
  const [body, setBody] = useState(state.notebody);

  return (
    <div className="bg-gradient-to-r from-slate-100 h-screen">
      <div className=" p-3 m-3 border-2 rounded-xl border-stone-800 max-w-6xl">
        <form className="flex flex-col">
          <div className="flex justify-center text-2xl border-b border-stone-800 p-1">
            {title}
          </div>
          <div className="text-lg border-b border-stone-800 p-2">{body}</div>
          <div className="flex justify-center m-2 pt-2 mr-2">
            <button
              onClick={() => navigate("/home")}
              className="px-3  text-lg bg-sky-600 rounded-md text-white max-w-fit"
            >
              Return
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewNote;
