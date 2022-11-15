import React, {FC} from "react"
import "../styles.css"
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout: FC<{children: React.ReactNode}> = ({children}) => {
    return <>
        <Navbar />
        {children}
        <Footer />
    </>
}

export default Layout