import { NavLink } from "react-router-dom";
import Login from "./login";

export default function loginD() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Login Dottore</h1>
                <NavLink to="/">Homepage</NavLink>
                <nav>
                    <h3>Non sei un dottore?</h3>
                    <ul>
                        <li>
                            <NavLink to="/loginPaziente">Login Paziente</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loginAdmin">Login Admin</NavLink>
                        </li>
                    </ul>
                </nav>

                <h3>Non sei ancora registrato?</h3>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/registrazioneGenerale" >Registrazione Paziente - Dottore</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id= "login">
                <h2>Login Dottore</h2>
                <Login></Login>
            </div>

            <div id="detail"></div>
        </>
    );
}