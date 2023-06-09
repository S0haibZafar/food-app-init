import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!:Foods;
  constructor(private route: ActivatedRoute, private fs: FoodService, private cartService: CartService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.food = this.fs.getFoodById(params['id']);
      }
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page");
  }

}
