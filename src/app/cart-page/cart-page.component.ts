import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString); 
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
