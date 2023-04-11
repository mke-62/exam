import './App.css';
import Layout from "./Layout";
import "animate.css/animate.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/home";

import Development from "./pages/development";
import Reporting from "./pages/reporting";
import Additionall from "./pages/additionall";
import Training from "./pages/training";
import Contacts from "./pages/contacts";





export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/development" element={<Development />} />
                        <Route path="/reporting" element={<Reporting />} />
                        <Route path="/additionall" element={<Additionall />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/contacts" element={<Contacts />} />


 
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}