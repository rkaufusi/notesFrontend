import { Navigate } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios';
const ProtectedRoute = ({ children }) => {

	const [isValidUser, setIsValidUser] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const verifyToken = async () => {
		let userToken = localStorage.getItem("user");
		const result = await axios.post("http://localhost:3500/verify", {
			userToken: userToken,
		});
		console.log(result.data);
		setIsValidUser(result.data);
		setIsLoaded(true);
	};

	useEffect(() => {
		verifyToken();
	}, [])

	if(isLoaded) {
		if (isValidUser) return children;
		return <Navigate to="/" />;
	}

};

export default ProtectedRoute;
