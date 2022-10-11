import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClick = () => {
    navigate("./createuser");
  };
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
			navigate("/")
		}

  };

  const verifyToken = async () => {
    let userToken = localStorage.getItem("user");
    const result = await axios.post("http://localhost:3500/verify", {
      userToken: userToken,
    });
    console.log(result.data);
    return result.data;
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-stone-800 text-3xl m-3">Login</h3>
      <div className="border-zinc-800 border-2 rounded-lg m-3">
        <form className="flex flex-col items-center py-2 px-5">
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
            className="bg-sky-500 text-white border-2 rounded-lg px-3 py-1 text-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <h3>New User ? </h3>
      <button
        onClick={handleClick}
        className="bg-sky-500 text-white border-2 rounded-lg px-3 py-1 text-lg"
      >
        Create new user
      </button>
    </div>
  );
};

export default Login;
