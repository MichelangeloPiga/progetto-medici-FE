export default function registrazioneG() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - Registrazione Generale</h1>
            </div >

            <div id="registrazioneGenerale">
                <nav>
                    <ul>
                        <li>
                            <a href={`/registrazionePaziente`}>Registrazione Paziente</a>
                        </li>
                        <li>
                            <a href={`/registrazioneDottore`}>Registrazione Dottore</a>
                        </li>
                    </ul>
                </nav>
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