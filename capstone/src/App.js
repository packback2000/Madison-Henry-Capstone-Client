import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SubjectList from './components/SubjectList/SubjectList';
import React from "react";
import PostList from "./components/PostList/PostList";
import CommentList from "./components/CommentList/CommentList";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element = {<SubjectList />} />
          <Route path='/subjects' element = {<SubjectList />} />
          <Route path='/subjects/:subject_id' element={<PostList />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
