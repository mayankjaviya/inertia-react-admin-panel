import React from "react";
import "../../../css/sidebars.css";
import { Link } from "@inertiajs/react";
import AddCategory from "./AddCategory";

export default function Index(props) {
    const { categories } = props;
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Categories</h2>
                <button className="btn btn-primary" onClick={() => setModalShow(true)}>Add Category</button>
                <AddCategory show={modalShow} handleClose={() => setModalShow(false)}/>

            </div>
            <div className=" mt-5">
            <table className="table">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Category Slug</th>
                        <th>Category Image</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    {/* <tbody> */}
                    {/* {categories ? categories.map((category) => (<></>)) : } */}
                    {/* </tbody> */}
                </table>
            </div>
        </div>
    );
}
