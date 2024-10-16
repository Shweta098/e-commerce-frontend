export class CartRequest {
    productId: number;
    customerId: string;
    quantity: number;

    constructor(productId: number, customerId: string, quantity: number) {
        this.productId=productId;
        this.customerId=customerId;
        this.quantity=quantity;
    }
}
