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
      <div className="flex justify-center items-center bg-black bg-opacity-60 h-screen">
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
/*
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        Modal body text goes here.
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Save changes</button>
      </div>
    </div>
  </div>
</div>
*/
export default Modal;
