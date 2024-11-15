import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./view/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Banner from "./components/Banner";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/banner"} element={<Banner/>}/>
                <Route path={"*"} element={<Navigate to={"/"} replace/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
