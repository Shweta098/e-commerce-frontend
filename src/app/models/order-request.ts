import { ProductRequest } from "./product-request";

export class OrderRequest {
    reference: string;
    amount: number;
    paymentMethod: string;
    customerId: string;
    products: ProductRequest[]

    constructor(reference?: string, amount?: number, paymentMethod?: string, customerId?: string, products?: ProductRequest[]) {
        this.reference=reference || "";
        this.amount=amount || 0;
        this.paymentMethod=paymentMethod || "";
        this.customerId=customerId || "";
        this.products=products || [];
    }
}
