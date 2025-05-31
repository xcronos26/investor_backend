/*
|--------------------------------------------------------------------------
| Application middleware
|--------------------------------------------------------------------------
|
| This file is used to define middleware for HTTP requests. You can register
| middleware as a `closure` or an IoC container binding. The bindings are
| preferred, since they keep this file clean.
|
*/

import Server from '@ioc:Adonis/Core/Server'

/*
|--------------------------------------------------------------------------
| Global middleware
|--------------------------------------------------------------------------
|
| An array of global middleware, that will be executed in the order they
| are defined for every HTTP request.
|
*/
Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser'),
])

/*
|--------------------------------------------------------------------------
| Named middleware
|--------------------------------------------------------------------------
|
| Named middleware are defined as key-value pairs. The value is the namespace
| or middleware function and key is the alias. Later, you can use these
| aliases on individual routes. For example:
|
| { auth: () => import('App/Middleware/Auth') }
|
| and then use it as follows:
|
| Route.get('dashboard', 'UserController.dashboard').middleware('auth')
|
*/

// Registro dos middlewares nomeados: 'auth' para autenticação e 'isStartup' para verificar 
// se o usuário é uma startup
Server.middleware.registerNamed({
  auth: () => import('App/Middleware/Auth'),
  isStartup: () => import('App/Middleware/IsStartup'), 
})
