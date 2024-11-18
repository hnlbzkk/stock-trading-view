import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./view/Home";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Banner from "./components/Banner";
import Login from "./view/Login";

function App() {
    const location = useLocation();
    const hideNavAndFooter = location.pathname === '/login'; // 登录页面隐藏导航和页脚

    return (
        <div className="App">
            {!hideNavAndFooter && <NavBar />}
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/banner"} element={<Banner/>}/>
                <Route path={"*"} element={<Navigate to={"/"} replace/>}/>
            </Routes>
            {!hideNavAndFooter && <Footer />}
        </div>
    );
}

export default App;
