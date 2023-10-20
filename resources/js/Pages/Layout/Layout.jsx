import React from "react";
import Navbar from "./Navbar";


export default function Layout(props){

    const {children} = props;
    return (
        <>
        <main>
        <Navbar />
        <div className="container-fluid m-3 mt-5">
                {children}
        </div>
        </main>
        </>
    );
}
