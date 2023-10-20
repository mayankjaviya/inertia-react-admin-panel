<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return Inertia::render('Category/Index', [
            'categories' => $categories
        ]);
    }

    public function create(){
        return Inertia::render('Category/AddCategory');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|unique:categories',
            'slug' => 'required|unique:categories',
            'image' => 'required',
        ]);

        $category = Category::create($request->all());

        return to_route('categories.index')->with('success', 'Category created successfully.');
    }

    public function edit(Category $category){
        return Inertia::render('Category/Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category){
        $request->validate([
            'name' => 'required|unique:categories,name,'.$category->id,
            'slug' => 'required|unique:categories,slug,'.$category->id,
            'image' => 'required',
        ]);

        $category->update($request->all());

        return to_route('categories.index')->with('success', 'Category updated successfully.');
    }

    public function destroy(Category $category){
        $category->delete();

        return to_route('categories.index')->with('success', 'Category deleted successfully.');
    }
}
