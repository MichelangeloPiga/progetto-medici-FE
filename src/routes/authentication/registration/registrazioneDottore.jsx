import { Form, NavLink } from "react-router-dom";

export default function RegistrazioneD() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Registrazione Dottore</h1>
                <NavLink to="/" activeClassName="active">Homepage</NavLink>
                <h3>Vuoi registrarti come Paziente?</h3>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/registrazionePaziente">Registrazione Paziente</NavLink>
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
                <h2>Registrazione Dottore</h2>
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
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <label>
                        Codice Dottore:
                        <input type="text" name="codiceDottore" />
                    </label>
                    <label>
                        Data di Nascita:
                        <input type="text" name="dataNascita" />
                    </label>
                    <label>
                        Luogo di Nascita:
                        <input type="text" name="luogoNascita" />
                    </label>
                    <label>
                        Sesso:
                        <input type="text" name="sesso" />
                    </label>
                    <label>
                        Specializzazione:
                        <input type="text" name="specializzazione" />
                    </label>
                    <label>
                        Numero di Telefono:
                        <input type="text" name="numeroTelefono" />
                    </label>
                    <label>
                        Indirizzo:
                        <input type="text" name="indirizzo" />
                    </label>
                    <label>
                        Città:
                        <input type="text" name="citta" />
                    </label>
                    <label>
                        Provincia:
                        <input type="text" name="provincia" />
                    </label>
                    <label>
                        CAP:
                        <input type="text" name="cap" />
                    </label>
                    <label>
                        Stato:
                        <input type="text" name="stato" />
                    </label>
                    <input type="submit" value="Submit" />
                </Form>
            </div>

            <div id="detail"></div>
        </>
    );
}