import { NavLink } from "react-router-dom";

export default function RegistrazioneG() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Registrazione Generale</h1>

                <NavLink to="/" activeClassName="active">Homepage</NavLink>
                <div id="registrazioneGenerale">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/registrazionePaziente">Registrazione Paziente</NavLink>
                            </li>
                            <li>
                                <NavLink to="/registrazioneDottore">Registrazione Dottore</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>


                <h3>Hai già un account Paziente o Dottore?</h3>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/loginGenerale">Login Paziente/Dottore/Admin</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>



            <div id="detail"></div>
        </>
    );
}