import { NotificacaoService } from './../notificacao.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    itensCarrinho: IProdutoCarrinho[] = [];
    total = 0;



  constructor(
    public carrinhoService: CarrinhoService,
    private NotificacaoService: NotificacaoService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }

  calculaTotal() {
    this.total  = this.itensCarrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
  }


  removeCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removeCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar() {
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = [];
    this.calculaTotal();
    this.NotificacaoService.notificar('Parabéns, você comprou com sucesso!');
    this.router.navigate(['/produtos']);
  }
}
