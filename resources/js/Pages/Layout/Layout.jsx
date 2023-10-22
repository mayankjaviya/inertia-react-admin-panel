import React from "react";
import "../../../css/sidebars.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout(props) {
    const { children } = props;
    return (
        <>
            <main>
                <Sidebar />
                <div className="container-fluid px-0 overflow-auto">
                    <Navbar />
                    <div className="m-3">{children}</div>
                </div>
            </main>
        </>
    );
}
