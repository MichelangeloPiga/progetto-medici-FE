export default function loginP() {
    return (
        <>
            <div id="sidebar">
                <h1>Progetto Medici - General Login</h1>

                <nav>
                    <ul>
                        <li>
                            <a path={`/`}>Homepage</a>
                        </li>
                        <li>
                            <a href={`/loginDottore`}>Login Paziente</a>
                        </li>
                        <li>
                            <a href={`/loginDottore`}>Login Dottore</a>
                        </li>
                        <li>
                            <a href={`/loginAdmin`}>Login Admin</a>
                        </li>
                    </ul>
                </nav>
            </div >

            <div id="notRegistered">
                <h2>Non sei ancora registrato?</h2>
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
            <div id="detail"></div>
        </>
    );
}