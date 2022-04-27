import { Link } from "react-router-dom";
import '../Pages/PostsPage.css';

export default function HomePage() {

return(
    <section className="homepage">

    <Link to='/subjects'><p className="links">Question Categories</p></Link>
    <Link to='/new'><p className="links">All Posts</p></Link>
    <Link to='/about'><p className="links">About</p></Link>

    </section>
)
}