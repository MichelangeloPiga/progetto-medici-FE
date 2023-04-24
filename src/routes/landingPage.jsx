import { NavLink } from "react-router-dom";

export default function landingPage() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/generalLogin" activeClassName="active">Login Paziente - Dottore - Admin</NavLink>
                        </li>
                        <li>
                            <a href={`/registrazioneGenerale`}>Registrazione Paziente</a>
                        </li>
                    </ul>
                </nav>
            </div >
            <div id="detail"></div>
        </>
    );
}