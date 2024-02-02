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
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("/login", async ({ view }) => {
  return view.render("login");
});

Route.post("/login", "UsersController.login").as("login");

Route.get("/kelas", "KelasController.index");
Route.get("/kelas/:id", "KelasController.show").as("kelas.detail");

Route.post("/kelas/create", "KelasController.store").as("kelas.store");
Route.post("/kelas/update/:id", "KelasController.update").as("kelas.update");
Route.get("/kelas/delete/:id", "KelasController.delete").as("kelas.delete");

Route.post("/siswa/create", "KelasController.store").as("siswa.store");
Route.post("/siswa/update/:id", "KelasController.update").as("siswa.update");
Route.get("/siswa/delete/:id", "KelasController.delete").as("siswa.delete");

//Routing Absen
Route.get("/absen", "AbsensController.index");
Route.get("/absen/:id", "AbsensController.show").as("absen.detail");

Route.post("/absen/create", "AbsensController.store").as("absen.store");
Route.post("/absen/update/:id", "AbsensController.update").as("absen.update");
Route.get("/absen/delete/:id", "AbsensController.delete").as("absen.delete");
