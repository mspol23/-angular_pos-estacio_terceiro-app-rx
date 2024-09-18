import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideComponent } from '../side/side.component';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nov-prod',
  standalone: true,
  imports: [SideComponent, FormsModule],
  templateUrl: './nov-prod.component.html',
  styleUrl: './nov-prod.component.css',
})
export class NovProdComponent implements OnInit {
  router: Router;
  servProd: ProdutoService;
  produto: Produto = new Produto();
  enviando: boolean = false;
  constructor(router: Router, servProd: ProdutoService) {
    this.router = router;
    this.servProd = servProd;
  }
  incluir(): void {
    this.enviando = true;
    this.servProd.adicionar(this.produto)
      .subscribe(_ => {
        this.enviando = false;
        this.router.navigateByUrl("/produto")
      });
  }
  ngOnInit(): void { }
}
