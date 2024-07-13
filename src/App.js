
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navigation from "./utils/nav";

//Layout è creato di modo da avere un componente Navigation comune a tutte le pagine

function Layout({children}) { //vengono passate le <Routes> come {children} per la visualizzazione della navigazione e del contenuto
    return (
        <>
            {children}
            <Navigation />
            
        </>
    )
}

function App() {
    return(
        <Router> 
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Auth" element={<Auth />} />
                </Routes>
            </Layout>
        </Router>
    )
}
export default App;

