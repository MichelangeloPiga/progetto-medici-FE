import { NavLink } from "react-router-dom";

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
                            <NavLink to="/registrazioneGenerale" activeClassName="active">Registrazione Paziente - Dottore</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>


            <div id="detail"></div>
        </>
    );
}