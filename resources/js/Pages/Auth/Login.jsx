import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Login(props) {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const submitLogin = (e) => {
        e.preventDefault();
        post("/login");
    }
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" >

                    <div className="card w-50 shadow p-4">
                        <h3 className="text-success">Login </h3>
                        <div className="card-body px-0">
                            <form onSubmit={submitLogin}>
                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" value={data.email} onChange={e => setData('email',e.target.value)}/>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="********" onChange={e => setData('password',e.target.value)}/>
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                            </div>
                            <div className="form-group text-end">
                               <button type="submit" className="btn btn-success px-4">Login</button>
                            </div>
                            </form>
                        </div>

                </div>
        </div>
    );
}
