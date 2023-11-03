import { Link } from "react-router-dom";

export default function Navbar() {

return (
    <nav>
    <h3>Nusantara Mount</h3>

    <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/login">Login</Link>
        <Link className="link" to="/main">Content</Link>
        <Link className="link" to="/bookmark">Bookmark</Link>
        <Link className="link" to="/openai">Ask Questions</Link>
        <Link className="link" to="/saran">Kritik dan Saran</Link>
    </div>
 </nav>
 
);
}