import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  adicionarCarrinho(produto: IProduto | undefined, quantidade: number) {
    throw new Error('Method not implemented.');
  }
  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(): IProduto[] {
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
