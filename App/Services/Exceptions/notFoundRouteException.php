<?php

namespace App\Services\Exceptions;

class NotFoundRouteException extends BaseException
{
	public function __construct($message = false)
	{
		parent::__construct($message);
	}
}