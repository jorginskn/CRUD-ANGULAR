import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
    
  products: Product[] = [];
  displayedColumns =  ['id', 'name', 'price', 'action'];

  //Atributo products que dentro do metodo ngOnInit vai chamar o read que vai fazer uma requisição do tipo get no back end 
  //que retorna um observable com lista de produtos  e o resultado  é  um array de produtos do back-end
  
  constructor(  private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(products)
    })

  }

}
