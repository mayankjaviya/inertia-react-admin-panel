<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DefaultRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = [
                'name' => 'admin',
                'display_name' => 'Administrator',
            ];

        $role = Role::firstOrCreate($role);
        $role->save();
    }
}
