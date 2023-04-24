import { NavLink } from "react-router-dom";
export default function loginP() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Login Paziente</h1>

                <NavLink to="/">Homepage</NavLink>
                <nav>
                    <h3>Non sei un paziente?</h3>
                    <ul>
                        <li>
                            <NavLink to="/loginDottore">Login Dottore</NavLink>
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
            </div >

            <div id="detail"></div>
        </>
    );
}