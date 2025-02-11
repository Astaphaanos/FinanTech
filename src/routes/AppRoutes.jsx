import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";

function AppRoutes() {
return (
    <Router>
        <Routes>
            <Route path="/" element={<Header />} />
        </Routes>
    </Router>
)
};

export default AppRoutes;
