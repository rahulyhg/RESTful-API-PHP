<?php
namespace App\Services\Permissions;

use App\Services\Http\Request\Request;

class Auth
{
   public function __construct()
   {
	  // $request = (new Request())->getHeader('auth');
   }

   public function check()
   {
	   dump('auth check');
	   return true;
   }
}