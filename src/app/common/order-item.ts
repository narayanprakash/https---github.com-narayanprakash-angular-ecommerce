import { CartItem } from "./cart-item";

export class OrderItem {
    imageUrl:string;
    unitPrice:number;
    quantity:number;
    productId:string;

    constructor(cartItem: CartItem){
        this.productId=cartItem.id;
        this.imageUrl=cartItem.imageUrl;
        this.unitPrice=cartItem.unitPrice;
        this.quantity=cartItem.quantity;
    }

}
