import { NavLink } from "react-router-dom";
export default function loginP() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - General Login</h1>
                <NavLink to="/" activeClassName="active">Homepage</NavLink>
                <nav>
                    <ul>

                        <li>
                            <NavLink to="/loginPaziente">Login Paziente</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loginDottore">Login Dottore</NavLink>
                        </li>
                        <li>
                            <NavLink to="/loginAdmin">Login Admin</NavLink>
                        </li>
                    </ul>
                </nav>

                <h2>Non sei ancora registrato?</h2>
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