import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./utils/AppRouter";
import AuthButton from "./components/Auth-button";

//Layout è creato di modo da avere un componente Navigation comune a tutte le pagine


function Layout({children}) { //vengono passate le <Routes> come {children} per la visualizzazione della navigazione e del contenuto
    return (
        <div className="container">
            {children}
            <AuthButton />
            
        </div>
    )
}


function App() {
    return(
        <Router>
            <Layout> 
                <AppRouter />
            </Layout>
        </Router>
    )
}
export default App;

