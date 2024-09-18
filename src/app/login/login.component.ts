import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormsModule } from '@angular/forms';
import { SideComponent } from "../side/side.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, SideComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  router: Router;
  servLogin: LoginService;
  login: string = "";
  senha: string = "";
  mensagem: string = "";

  constructor(router: Router, servLogin: LoginService) {
    this.router = router;
    this.servLogin = servLogin;
  }

  signIn(): void {
    if(this.servLogin.signIn(this.login, this.senha)){
      this.router.navigateByUrl("/produto");
    }
    else {
      this.mensagem = "Login ou senha inválido.";
      this.login = "";
      this.senha = "";
      this.router.navigateByUrl("/login");
    }
  }
  ngOnInit(): void{ }
}
