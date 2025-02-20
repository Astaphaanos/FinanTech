import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";


function AppRoutes() {
return (
    <Router>
        <Routes>
            <Route path="/" element={<><Header/><Home/></>}/>
        </Routes>
    </Router>
)
};

export default AppRoutes;
