import { NavLink } from "react-router-dom";

export default function landingPage() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/loginGenerale" activeClassName="active">Login Paziente - Dottore - Admin</NavLink>
                        </li>
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