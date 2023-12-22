import logo from '../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
const Header = () => {
    return (
        <>
            <div className="container-fluid logo-search">
                <img src={logo} className="img-fluid" />
                <input className="search me-2" type="search" placeholder="Try searching for Teremity..." aria-label="Search" /><FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' style={{ color: "#a3a7ae", }} />
                <div className='float-end iconNbutton'>
                    <button className='btn discord me-3'>
                        <span className='icon'><FontAwesomeIcon icon={faDiscord} style={{ color: "#f2f2f2" }} />
                        </span>
                    </button>
                    <a href="#" className='login-link'>Login</a>
                </div>

            </div>
            <div className='container-dropdown'>
                <ul className="nav nav-tabs">
                    <li className="nav-item dropdown mb-2">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: " rgb(173, 169, 169)",}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: " rgb(173, 169, 169)"}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: "rgb(173, 169, 169)"}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: "rgb(173, 169, 169)"}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: "rgb(173, 169, 169)"}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{color: "rgb(173, 169, 169)"}}>Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <button type="button" class="btn btn-danger" style={{height:"35px",width:"100px"}}>Danger</button>
                </ul>
            </div>

        </>
    )
}

export default Header;