<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;

class UserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call("OthersTableSeeder");

        \DB::table('users')->insert([
            'uuid' => Uuid::uuid4()->toString(),
            'name' => 'Giáp Văn Điện',
            'email' => 'giapdien1804@gmail.com',
            'password' => bcrypt('Dien.giap@123'),
            'status' => 'active',
            'access' => \Hash::make('diengiap')
        ]);

    }
}
