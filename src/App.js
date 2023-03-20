import './App.css';
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./componets/home";

import EkoSopr from "./pages/еkologicheskoe-soprovozhdenie";


export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<IndexPage />} />
                        <Route path="/еkologicheskoe-soprovozhdenie" element={<EkoSopr />} />
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