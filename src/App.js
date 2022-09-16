import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StreamShow from "./pages/StreamShow";
import StreamCreate from "./pages/StreamCreate";
import StreamEdit from "./pages/StreamEdit";
import "./App.css";

const App = () => {

    

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/streams" element={<StreamShow/>}/>
                <Route path="/streams/create" element={<StreamCreate/>}/>
                <Route path="/streams/edit" element={<StreamEdit/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
