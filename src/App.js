import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Join } from './component/join/join';
import { Chat } from './component/chat/chat';


import './App.css';



 

 

function App() {
  useEffect(() => {

    
  }, []);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

    </div>
  );
}

export default App;
