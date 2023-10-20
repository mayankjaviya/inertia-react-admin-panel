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
        $roles = [
            [
                'name' => 'admin',
                'display_name' => 'Administrator',
            ],
            [
                'name' => 'company',
                'display_name' => 'Company',
            ],
        ];

        foreach ($roles as $role) {
            $role = Role::firstOrCreate($role);
            $role->save();
        }
    }
}
