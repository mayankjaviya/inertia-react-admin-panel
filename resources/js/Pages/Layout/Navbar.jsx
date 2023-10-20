import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar(props) {

   const { path } = usePage().props;
    return (
       <>
         <h1 className="visually-hidden">Sidebars examples</h1>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: 280 }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <svg className="bi me-2" width={40} height={32}>

            </svg>
            <span className="fs-4">Admin Panel</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto text-light">
            <li className="nav-item my-2">
              <Link href="/dashboard" className={`nav-link text-light ${window.location.pathname === '/dashboard' ? 'active' : ''}`} aria-current="page">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/categories" className={`nav-link text-light ${window.location.pathname === '/categories' ? 'active' : ''}`} aria-current="page">
                Categories
              </Link>
            </li>

          </ul>
          <hr />
          <div className="">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none"
            >
              <Link href="/logout" method="post" className="text-light" type="button">Logout</Link>
            </a>
          </div>
        </div>
      <div className="b-example-divider" style={{  width: 0 }}></div>
       </>
    );

}
