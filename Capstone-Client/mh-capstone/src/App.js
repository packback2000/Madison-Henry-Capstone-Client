import GetPosts from "./Posts/CreatePost/GetPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubjectDetails from "./Subjects/SubjectDetails";
import CommentList from "./Comments/CommentList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SubjectDetails/>}/>
        <Route path='/subjects' element={<SubjectDetails/>}/>
        <Route path='/subjects/:subject_id' element={<GetPosts/>} />
        <Route path='/posts/:post_id/comments' element={<CommentList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
