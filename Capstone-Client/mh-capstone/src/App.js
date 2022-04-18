import GetPosts from "./Posts/CreatePost/GetPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubjectDetails from "./Subjects/SubjectDetails";
import CommentList from "./Comments/CommentList";
import Header from './Styles/Header/Header';
import Footer from "./Styles/Footer/Footer";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/PostsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/subjects' element={<SubjectDetails/>}/>
        <Route path='/subjects/:subject_name' element={<GetPosts/>} />
        <Route path='/posts/:post_id/comments' element={<CommentList/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;