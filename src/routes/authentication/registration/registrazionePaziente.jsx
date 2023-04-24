export default function registrazioneP() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Registrazione Paziente</h1>

            </div >
            <div id="registrazione">
                <h2>Registrazione Paziente</h2>
                <form>
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
                </form>
            </div>
            <div id="navigate">
                <h3>Hai già un account Paziente o Dottore?</h3>
                <nav>
                    <ul>
                        <li>
                            <a href={`/loginPaziente`}>Login Paziente</a>
                        </li>
                        <li>
                            <a href={`/loginDottore`}>Login Dottore</a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div id="homepage">
                <h3>Homepage</h3>
                <nav>
                    <ul>
                        <li>
                            <a href={`/`}>Homepage</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="detail"></div>
        </>
    );
}