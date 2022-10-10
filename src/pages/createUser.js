import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const handleClick = () => {
    navigate("/createuser");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
		await axios.post('http://localhost:3500/create', user);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-stone-800 text-3xl m-3">Create User</h3>
      <div className="border-zinc-800 border-2 rounded-lg m-3">
        <form className="flex flex-col items-center py-2 px-5">
          <label className="text-xl">First name:</label>
          <input
            onChange={(event) =>
              setUser({ ...user, firstname: event.target.value })
            }
            placeholder="first name"
          />
          <label className="text-xl">Last name:</label>
          <input
            onChange={(event) =>
              setUser({ ...user, lastname: event.target.value })
            }
            placeholder="last name"
          />
          <label className="text-xl">Email:</label>
          <input
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
            placeholder="email"
          />
          <label className="text-xl">Password:</label>
          <input
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            placeholder="password"
          />
          <button
            onClick={(event) => handleSubmit(event)}
            className="bg-sky-500 text-white border-2 rounded-lg px-3 py-1 m-2 text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
