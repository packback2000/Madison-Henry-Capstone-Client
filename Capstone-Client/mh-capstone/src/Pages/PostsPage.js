import { Link } from "react-router-dom";
import '../Pages/PostsPage.css';

export default function HomePage() {

return(
    <section className="homepage">
        <div>
        <Link to='/subjects'><p className="links">Question Categories</p></Link>
        </div>
    </section>
)
}