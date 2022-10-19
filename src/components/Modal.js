import axios from "axios";
import { useNavigate } from "react-router-dom";
const Modal = ({ setIsOpen, noteid, setFetch }) => {
	const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete("http://localhost:3500/notes/delete", {
      data: { noteid: noteid },
    });
		setIsOpen(false);
		setFetch(true);
    //window.location.reload(false);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="flex justify-center items-center">
        <div className="justify-center flex-col bg-white bg-clip-padding my-12 py-12 px-24 border-4 border-sky-500 rounded-xl">
          <h3 className="m-2 text-lg">Are you sure you want to delete?</h3>
          <button onClick={handleDelete} className="px-3 m-1 mr-2 text-lg bg-red-600 rounded-md text-white mx-4 ">
            DELETE
          </button>
          <button
            className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white mx-4"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
