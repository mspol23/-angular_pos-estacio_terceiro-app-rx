import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'produto', component: ProdutoComponent, canActivate: [LoginService] },
  {
    path: 'novoprod',
    component: NovProdComponent,
    canActivate: [LoginService],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
