import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';
import { ListaClientesSelecionadosComponent } from './paginas/lista-clientes-selecionados/lista-clientes-selecionados.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clientes',
    component: ListaClienteComponent,
  },
  {
    path: 'clientes-selecionados',
    component: ListaClientesSelecionadosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
