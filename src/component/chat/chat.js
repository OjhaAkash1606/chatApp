import React, { useEffect, useState } from 'react';
import { User } from '../join/join';
import socketIO from 'socket.io-client';
import './chat.css';
// import sendLogo from '../img/send1.png';

const endPoint = "http://localhost:3009";
// const { id: userName } = User;

let user;
export const Chat = () => {
    const socket = socketIO(endPoint, { transports: ["websocket"] });
    // const { userName, id } = User;
    // user = localStorage.getItem("name");
    // console.log(userName, id);


    useEffect(() => {
        // console.log(userName, id);
        socket.on("connect", () => { alert(`hello ${User.userName}  client is run `); });

        socket.emit("joined", ({ User }));

        socket.on("welcome", (data) => {
            console.log(data.user, data.message);
        });

        socket.on("userJoined", (data) => {
            console.log(data.user, data.message);
        });


    }, []);

    useEffect(() => {

    });

    return (


        <div className='chatPage'>
            <div className='chatContainer'>
                <div className='header'>  {User.userName} </div>
                <div className='chatBox'></div>
                <div className='inputBox'>
                    <input type="text" id='chatInput' />
                    <button className='sendBtn'>Send</button>
                </div>
            </div>
        </div>
    );
};