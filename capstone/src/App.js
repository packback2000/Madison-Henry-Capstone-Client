import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SubjectList from './components/Subjects/SubjectList/SubjectList';
import React from "react";
import PostList from "./components/Posts/PostList/PostList";
import CommentList from "./components/Comments/CommentList/CommentList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
        <Routes>
          <Route exact path='/' element = {<SubjectList />} />
          <Route path='/subjects' element = {<SubjectList />} />
          <Route path='/subjects/:subject_id' element={<PostList />} />
          <Route path='/subjects/:subject_id/posts/:post_id' element={<CommentList />} />
        </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
