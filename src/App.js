import './App.css';
import Layout from "./Layout";
import "animate.css/animate.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/home";

import EkoSopr from "./pages/development";
import EkoReporting from "./pages/reporting";
import EkoAdditionall from "./pages/additionall";
import EkoTraining from "./pages/training";
import EkoContacts from "./pages/contacts";





export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/development" element={<EkoSopr />} />
                        <Route path="/reporting" element={<EkoReporting />} />
                        <Route path="/additionall" element={<EkoAdditionall />} />
                        <Route path="/training" element={<EkoTraining />} />
                        <Route path="/contacts" element={<EkoContacts />} />



                        <Route path="/heroes">
                            <Route index element={<EkoSopr />} />
                            <Route path=":id" element={<EkoSopr />} />
                            <Route path="create" element={<IndexPage />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}