const Notes = ({note}) => {
  return (
    <div className="p-3 border-2 rounded-xl border-stone-800">
      <div className="flex justify-center text-2xl border-b border-stone-800">{note.notetitle}</div>
      <div className="text-lg border-b border-stone-800">{note.notebody}</div>
      <div>
        <button className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white">View</button>
        <button className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white">Edit</button>
        <button className="px-3 m-1 mr-2 text-lg bg-sky-600 rounded-md text-white">Delete</button>
      </div>
    </div>
  );
};

export default Notes;
