import GetPosts from "./Posts/CreatePost/GetPosts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SubjectDetails from "./Subjects/SubjectDetails";
import CommentList from "./Comments/CommentList";
import Header from './Styles/Header/Header';
import Footer from "./Styles/Footer/Footer";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/PostsPage";
import NewPosts from "./Posts/NewPosts/NewPosts";
import SearchPage from "./Styles/Header/SearchPage";
import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from "react-minesweeper";

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
        <Route path='/new' element={<NewPosts/>}/>
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/minesweeper' element={<Minesweeper/>} />
        <Route path="*" element={<Minesweeper/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
