import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isShown, setIsShown] = useState(false);

	const togglePassword = () => {
		setIsShown(!isShown);
	}

  const handleClick = () => {
    navigate("./createuser");
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post("http://localhost:3500/login", user);
      let { accessToken } = result.data;
      localStorage.setItem("user", accessToken);
      const isValidUser = await verifyToken();
      if (isValidUser) navigate("/home");
    } catch (error) {
      console.log(error);
      navigate("/");
    }
  };

  const verifyToken = async () => {
    let userToken = localStorage.getItem("user");
    const result = await axios.post("http://localhost:3500/verify", {
      userToken: userToken,
    });
    return result.data;
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-400 h-screen">
      <h3 className="text-stone-800 text-5xl m-3 p-3">Login</h3>
      <div className="border-zinc-800 border-2 rounded-lg m-3">
        <form className="flex flex-col items-center py-2 px-5">
          <label className="text-xl p-2">Email:</label>
          <input
            className="py-1 px-2 rounded-lg focus:border-blue-600"
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
            placeholder="Email"
          />
          <label className="text-xl p-2">Password:</label>
          <div className="flex-col">
            <input
              type={isShown ? "text" : "password"}
              className="w-[80%] py-1 px-2 rounded-lg focus:border-blue-400"
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
              placeholder="Password"
            />
          </div>
          <div className="pt-4 m-2">
            <button
              onClick={(event) => handleSubmit(event)}
              className=" bg-sky-500 text-white border-2 rounded-lg px-3 py-1 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <h3 className="m-2 text-xl">New User ? </h3>
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
