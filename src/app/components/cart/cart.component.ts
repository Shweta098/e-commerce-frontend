import { Component, OnInit } from '@angular/core';
import { CartDetail } from 'src/app/models/cart-detail';
import { OrderRequest } from 'src/app/models/order-request';
import { PaymentMethod } from 'src/app/models/payment-method';
import { ProductRequest } from 'src/app/models/product-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  carts:CartDetail[]=[];
  customerId: string="66b2742d75f9c837157e8430";
  referenceId: string="";
  paymentMethod: string= "";
  paymentOptions: string[]=["PAYPAL", "CREDIT_CARD", "VISA", "MASTER_CARD", "BITCOIN"]
  price: number=0;
  productRequests: ProductRequest[]=new Array();
  orderRequest: OrderRequest= new OrderRequest();


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCart(this.customerId).subscribe(
      responseData=>{
        this.carts=<CartDetail[]>responseData.body;
        console.log(this.carts)
      }
    )
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const lengthOfCode = 10;
    this.referenceId=this.makeRandom(lengthOfCode, possible);
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  makeOrder() {
    this.productRequests=new Array();
    this.carts.forEach(p=>{
      this.price+=p.price;
      this.productRequests.push(new ProductRequest(p.productId, p.quantity));
    })
     this.orderRequest= new OrderRequest(this.referenceId, this.price,
      this.paymentMethod, this.customerId, this.productRequests
    )

    this.productService.createOrder(this.orderRequest).subscribe(
      responseData=>{
        console.log(responseData.message);
      }
    )


  }
  

}
