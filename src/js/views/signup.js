// import React from "react";
import React, { useState, useEffect } from "react";

import { useResolvedPath } from "react-router";
import { useHistory } from "react-router-dom";
import "../../styles/signup.css";


export const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        type_of_user: ""
    });

    const history = useHistory()
    console.log(history)

    const createUser = async (user) => {
        const response = await fetch(
            "http://127.0.0.1:5000/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({
                //     "name": "prueba directta",
                //     "email": "prueba@g.com",
                //     "password": "1234"
                // }),
                body: JSON.stringify(user)
            }
        );
        const body = await response.json();
        if (!response.ok) {
            alert(`Fallo el Registro: ${response.status}: ${body.msg}`);
            return false
        }
        else {
            return true
        }
    }
    console.log(user);
    return (
        // <form action="action_page.php">
        <div>
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <label className="name"><b>Name</b></label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    id="name"
                    value={user.name}
                    // required
                    onChange={(e) => {
                        setUser({
                            name: e.target.value,
                            email: user.email,
                            password: user.password,
                            type_of_user: user.type_of_user
                        });
                    }}
                />


                <label className="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    value={user.email}
                    // required
                    onChange={(e) => {
                        setUser({
                            name: user.name,
                            email: e.target.value,
                            password: user.password,
                            type_of_user: user.type_of_user
                        });
                    }}
                />

                <label className="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    value={user.password}
                    // required
                    onChange={(e) => {
                        setUser({
                            name: user.name,
                            email: user.email,
                            password: e.target.value,
                            type_of_user: user.type_of_user
                        });
                    }}
                />

                <label className="type"><b>Type of user:</b></label>
                <div className="d-flex row">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="personal"
                            value="Personal"
                            onClick={(e) =>{
                                setUser({
                                    name: user.name,
                                    email: user.email,
                                    password: user.password,
                                    type_of_user: e.target.value
                                });
                            }}
                        // checked
                        />
                        <label className="form-check-label" htmlFor="personal">Personal</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="comercial"
                            value="Comercial"
                            onClick={(e) =>{
                                setUser({
                                    name: user.name,
                                    email: user.email,
                                    password: user.password,
                                    type_of_user: e.target.value
                                });
                            }}
                        />
                        <label className="form-check-label" htmlFor="comercial">Comercial</label>
                    </div>
                </div>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button
                    // type="submit"
                    className="registerbtn"
                    onClick={async(e) => {
                        // console.log(user)
                        const userCreated = await createUser(user);
                        if (userCreated == true) {
                            history.push("/")
                        }
                        else {
                            alert("Algo paso")
                        }
                        setUser({
                            name: "",
                            email: "",
                            password: "",
                        })
                    }}
                >
                    Register
                </button>
            </div>

            {/* <div className="container signin">
                <p>Already have an account? <a href="#">Sign in</a>.</p>
            </div> */}
        </div>
    )
};