import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.css";


export const Navbar = () => {
	const [logUser, setLogUser] = useState({
		email: "",
		password: "",
	});

	const history = useHistory()
	const logInUser = async (logUser) => {
		const response = await fetch(
			"http://127.0.0.1:5000/login",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(logUser)
			}
		)
		const token = await response.json();
		if (!response.ok) {
			alert(`Fallo el logIN: ${response.status}: ${token.msg}`);
			return false
		}
		else {
			sessionStorage.Token = token
			return true
		}
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div className="dropdown">
				<div>
					{!sessionStorage.Token
						? <div>
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								LogIn
							</button>
							<ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton1">
								<li>
									<input
										type="text"
										placeholder="Enter Email"
										name="email"
										id="email"
										value={logUser.email}
										required
										onChange={(e) => {
											setLogUser({
												email: e.target.value,
												password: logUser.password,
											});
										}}
									/>
								</li>
								<li>
									<input
										type="password"
										placeholder="Enter Password"
										name="psw"
										id="psw"
										value={logUser.password}
										required
										onChange={(e) => {
											setLogUser({
												email: logUser.email,
												password: e.target.value,
											});
										}}
									/>
								</li>
								<li>
									<button
										// type="submit"
										className="btn btn-primary"
										onClick={async (e) => {
											// console.log(user)
											const userLogged = await logInUser(logUser);
											if (userLogged == true) {
												history.push("/private")
											}
											else {
												alert("Algo paso")
											}
											setLogUser({
												email: "",
												password: "",
											})
										}}
									>
										Login!
									</button>
								</li>
							</ul>
							<Link to="/signup">
								<button className="btn btn-primary mx-2">Sign Up</button>
							</Link>
							
						</div>

						: <div>
							<button
								className="btn btn-primary"
								onClick={async (e) => {
									sessionStorage.Token = "";
									history.push("/")
									setLogUser({
										email: "",
										password: "",
									})
								}}>Log Out!!</button>
						</div>
					}
				</div>
			</div>

		</nav>
	);
};
