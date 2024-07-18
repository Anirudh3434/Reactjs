import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

export default function Layout(){
    return (
        <><Header />
        <Outlet />
        <Footer />
        </>
    )
}