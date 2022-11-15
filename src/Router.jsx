import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="" element={<Projects />} />
                <Route path="" element={<Contact />} />
            </Routes>
        </div>
    )
}