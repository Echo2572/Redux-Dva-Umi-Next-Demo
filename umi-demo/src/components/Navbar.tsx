import { Link } from 'umi';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
            </ul>
        </nav>
    );
}