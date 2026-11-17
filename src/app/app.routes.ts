import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Login } from './pages/login/login';
import { Usuario } from './usuario/usuario';
import { Admin } from './admin/admin';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';
import { Panel } from './pages/panel/panel';

export const routes: Routes = [
  { path: '', component: Productos, pathMatch: 'full' },
  { path: 'login', component: Login },

  // protegida: requiere sesión iniciada
  { path: 'usuario', component: Usuario, canActivate: [authGuard] },

  // protegida: requiere ser administrador
  { path: 'admin', component: Admin, canActivate: [adminGuard] },

  { path: 'panel', component: Panel, canActivate: [authGuard, adminGuard] },
];