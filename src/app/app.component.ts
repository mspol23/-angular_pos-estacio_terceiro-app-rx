import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TerceiroAppV2';
  router: Router;
  servLogin: LoginService;

  constructor(router: Router, servLogin: LoginService) {
    this.router = router;
    this.servLogin = servLogin
  }

  signOut(): void {
    this.servLogin.signOut();
    this.router.navigateByUrl("/home")
  }
}
