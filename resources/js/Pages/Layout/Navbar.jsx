import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar(props) {

   const { auth } = usePage().props;
   return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
           <div className="container d-flex justify-content-end">
               <img
                   src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"
                   height="25"
                   alt=""
               />
               <h5 className="mb-0 ms-2">{auth.name}</h5>
           </div>
       </nav>
   );

}
