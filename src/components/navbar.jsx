
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact to="/">
                        Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/registrazioneGenerale">
                        Registrazione
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/loginGenerale">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;