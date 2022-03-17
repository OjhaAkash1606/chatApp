import React, { useEffect, useState } from "react";
import './join.css';
import { Link } from "react-router-dom";
// import axios from 'axios';
// import userList from '../userList/userList';


// let userList = [];
let User = [];

const Join = () => {
    const [userName, setUserName] = useState();

    const sendUser = (e) => {
        const id = Math.trunc(Math.random() * 1000);
        User = { userName, id };
        // console.log(User);
        // userList.push({ id, userName });
        // console.log(userList);

        // localStorage.setItem("name", userName);
        return userName ? null : e.preventDefault();

    };

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={require("../img/logo.png")} alt="" />
                <h1>Live Chat</h1>
                <input type="text" placeholder="Enter your Name" id="joinInput" onChange={(e) => setUserName(e.target.value)} />

                <Link to="/chat" onClick={sendUser} ><button className="joinBtn" >Login In</button> </Link>

            </div>


        </div >
    );
};

export { Join, User };