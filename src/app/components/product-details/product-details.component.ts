import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartRequest } from 'src/app/models/cart-request';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id: number=0;
  product = new Product();
  customerId: string="66b2742d75f9c837157e8430";

  constructor(private productService: ProductService, private route : ActivatedRoute, 
    private router : Router
   ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params=> {
        this.id=+params['id'];
      }
    );
    this.productService.getProductDetails(this.id).subscribe(
      responseData=>{
        console.log("id:"+this.id);
        this.product = <Product> responseData.body;
        console.log(this.product);
      }
    )  
    // this.productService.getCart(this.customerId).subscribe(
    //   responseData=>{
    //     console.log("cart:"+responseData);
    //   }
    // )
  }

  addToCart() {
    var cartRequest= new CartRequest(this.product.id, this.customerId, 1);
    this.productService.addToCart(cartRequest).subscribe(
      responseBody=>{
        console.log("res:"+responseBody.message);
      }
    )
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  



}
