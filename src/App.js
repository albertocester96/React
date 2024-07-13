
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Navigation from "./utils/nav";

function Layout({children}) {
    return (
        <>
            <Navigation />
            {children}
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