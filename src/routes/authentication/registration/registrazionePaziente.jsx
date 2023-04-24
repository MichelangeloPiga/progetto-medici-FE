import { Form, NavLink } from "react-router-dom";
export default function registrazioneP() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Registrazione Paziente</h1>

                <NavLink to="/" activeClassName="active">Homepage</NavLink>

                <h3>Vuoi registrarti come Dottore?</h3>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/registrazioneDottore">Registrazione Dottore</NavLink>
                        </li>
                    </ul>
                </nav>

                <h3>Hai già un account Paziente o Dottore o Admin?</h3>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/loginGenerale">Login Paziente/Dottore/Admin</NavLink>
                        </li>

                    </ul>
                </nav>
            </div >
            <div id="registrazione">
                <h2>Registrazione Paziente</h2>
                <Form>
                    <label>
                        Nome:
                        <input type="text" name="nome" />
                    </label>
                    <label>
                        Cognome:
                        <input type="text" name="cognome" />
                    </label>
                    <label>
                        Codice Fiscale:
                        <input type="text" name="codiceFiscale" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <label>
                        Data di Nascita:
                        <input type="text" name="dataNascita" />
                    </label>
                    <label>
                        Sesso:
                        <input type="text" name="sesso" />
                    </label>
                    <label>
                        Numero di Telefono:
                        <input type="text" name="numeroTelefono" />
                    </label>
                    <input type="submit" value="Registrati" />
                </Form>
            </div>



            <div id="detail"></div>
        </>
    );
}