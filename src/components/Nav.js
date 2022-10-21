import { useNavigate } from "react-router-dom";
import axios from "axios";
const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/createnote");
  };
  const handleDelete = async () => {
    const userToken = localStorage.getItem("user");
    await axios.delete("http://localhost:3500/delete", {
      params: {
        token: userToken,
      },
    });
    window.alert("This action cannot be undone");
    navigate("/");
  };
  return (
    <div className="flex justify-end bg-cyan-200 h-14 w-full">
      <button
        onClick={handleClick}
        className="px-3 m-2 text-xl bg-sky-600 rounded-lg text-white"
      >
        Create New Note
      </button>
      <button
        onClick={handleDelete}
        className="px-3 m-2 text-xl bg-red-600 rounded-lg text-white"
      >
        Delete User
      </button>
    </div>
  );
};

export default Nav;
