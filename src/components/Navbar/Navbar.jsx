import { Link } from 'react-router-dom';
import { NavLinks } from './data';
import './navbar.css'
const Navbar = () => {
    const logoStyle = {
        fontSize: "1.5rem",
        color: "#fcfcfd",
        fontWeight: "bolder"
    }
    return (
        <header>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={logoStyle}>SmartBlog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto">
                            {
                                NavLinks.map(({ key, route, label }) => (
                                    <li className="nav-item" key={key}>
                                        <Link to={route} className='nav-link'>{label}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar