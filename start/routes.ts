/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/users', 'UsersController') //Todas as operações do CRUD 
Route.resource('/usersAdm', 'UsersAdmsController')

Route.post('login', 'UsersController.login') //LOGIN USUARIO  
Route.post('loginAdm', 'UsersAdmsController.loginAdm') //LOGIN USUARIO  ADM

Route.get('dashboard', 'UsersController.dashboard') //Mostra Usuario Autênticado

//aqui vc coloca um grupo e um middleware para validar os login, assim vc so precisa fazer uma unica vez.
// controller, serviço, middleware
Route.post('/formulario/save-step1', 'StepsController.saveStep1')
Route.post('/steps/2', 'StepsController.saveStep2')
Route.post('/step3', 'StepsController.saveStep3')
Route.post('/steps/step4', 'StepsController.saveStep4')
Route.post('/steps/step5', 'StepsController.saveStep5')
Route.post('/formulario/step6', 'StepsController.saveStep6')
Route.post('/formulario/step7', 'StepsController.saveStep7')
Route.post('/formulario/step8', 'StepsController.saveStep8')


Route.get('/formulario/todos', 'StepsController.getAllFormData')
