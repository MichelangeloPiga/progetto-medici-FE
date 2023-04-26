import { NavLink } from "react-router-dom";
import Login from "./login";

export default function loginA() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Login Admin</h1>

                <NavLink to="/">Homepage</NavLink>
                <nav>
                    <h3>Non sei un Admin?</h3>
                    <ul>
                        <li>
                            <NavLink to="/loginDottore">Login Dottore</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loginPaziente">Login Paziente</NavLink>
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
            </div >

            <div id= "login">
                <h2>Login Admin</h2>
                <Login></Login>
            </div>

            <div id="detail"></div>
        </>
    );
}