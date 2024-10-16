import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products:Product[]=[];
  constructor(private productService: ProductService, private router : Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      responseData=>{
        this.products=<Product[]>responseData.body;
        console.log(this.products);
      }
    );
  }

  getProductDetails(id: number) {
    // console.log(id);
    this.router.navigate(['/product-details', id]);
  }

}
