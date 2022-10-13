import {useNavigate} from 'react-router-dom';
const Nav = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/createnote");
	}
	return (
		<div className="flex justify-end bg-slate-300 h-12 w-full">
			<button onClick={handleClick} className="px-3 m-1 mr-2 text-xl bg-sky-600 rounded-lg text-white">Create New Note</button>
		</div>
	)
}

export default Nav
