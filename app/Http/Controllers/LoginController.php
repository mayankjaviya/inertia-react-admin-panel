<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (auth()->attempt($credentials)) {
            return to_route('dashboard');
        }

        return redirect()->back()->withInput()->withErrors([
            'email' => 'These credentials do not match our records.',
        ]);
    }

    public function logout(){
        auth()->logout();
        return redirect()->route('login');
    }
}
