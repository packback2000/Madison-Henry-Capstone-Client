import { Link } from "react-router-dom";

export default function HomePage() {

return(
    <section className="homepage">
        <Link to='/subjects'><p>Question Categories</p></Link>
        <Link to='/about'><p>About Us</p></Link>
    </section>
)
}