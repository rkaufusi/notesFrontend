import {useState} from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
const EditNote = () => {
  const { state } = useLocation();
  console.log(state);
	const [title, setTitle] = useState(state.notetitle);
	const [body, setBody] = useState(state.notebody);
/*
	const handleSubmit = async (event) => {
		try {
			event.preventDefault();
			const result = await axios.post("http://localhost:3500/login", user);
			let { accessToken } = result.data;
			console.log(accessToken);
			localStorage.setItem("user", accessToken);
			const isValidUser = await verifyToken();
			console.log(isValidUser)
			if (isValidUser) navigate("/home");
		} catch(error) {
			console.log(error);
			navigate("/home")
		}

  };
*/
  return (
    <div className=" p-3 m-3 border-2 rounded-xl border-stone-800 max-w-6xl">
      <form className="flex flex-col">
        <input onChange={(event) => setTitle(event.target.value)} className="flex justify-center text-2xl border-b border-stone-800" value={title}>
          
        </input>
        <input onChange={(event) => setBody(event.target.value)} className="text-lg border-b border-stone-800" value={body}>

        </input>
				<button

				className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white max-w-fit"
			>
				Save
			</button>
      </form>
    </div>
  );
};

export default EditNote;