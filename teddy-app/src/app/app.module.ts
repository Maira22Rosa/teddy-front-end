import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './componentes/top-menu/top-menu.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './paginas/lista-cliente/lista-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardClienteComponent } from './componentes/card-cliente/card-cliente.component';
import { ClienteFormComponent } from './paginas/lista-cliente/cliente-form/cliente-form.component';
import { ModalConfirmacaoComponent } from './paginas/lista-cliente/modal-confirmacao/modal-confirmacao.component';
import { ListaClientesSelecionadosComponent } from './paginas/lista-clientes-selecionados/lista-clientes-selecionados.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NavBarComponent,
    LoginComponent,
    ListaClienteComponent,
    CardClienteComponent,
    ClienteFormComponent,
    ModalConfirmacaoComponent,
    ListaClientesSelecionadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [CardClienteComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
