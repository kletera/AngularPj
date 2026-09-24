import { Component,computed,signal } from '@angular/core';
import { effect } from '@angular/core';

// États réactifs (Signals) :


@Component({
  imports: [],
  selector: 'app-ex-signals',
  styleUrl: './ex-signals.css',
  templateUrl: './ex-signals.html',
})
export class ExSignals {
  quantity=signal<number>(1);
  unitPrice =signal<number>(35);
  discountCode =signal<number>(0);
  isExpressShipping =signal<boolean>(false);
  // Valeurs calculées (Computed Signals) :
  subtotal=computed(() => this.quantity() * this.unitPrice());

  discountAmount = computed(()=> this.subtotal() * this.discountCode()/100);

  shippingFee=computed(()=>{
    if(this.quantity()===0){
      return 0;
    }
    if(this.isExpressShipping()){
      return 12;
    }else{
      if(this.subtotal()>100){
        return 0;
      }
      return 5;
    }
  });
  total=computed(()=>this.subtotal()-this.discountAmount()+this.shippingFee())

  // Effet secondaire (Effect) :
  constructor(){
    effect(()=>{
      const data={
        quantity : this.quantity(),
        unitPrice :this.unitPrice(),
        discount :this.discountCode(),
        isExpressShipping : this.isExpressShipping(),
        total : this.total(),
      }
      console.log('[EFFECT] Mise a jour du panier :', data)
      localStorage.setItem('panier', JSON.stringify(data));
    });
  }

  // Methode d'action
  // Bouton + / -*
  increase():void{
    this.quantity.update(q => q + 1);
  }
  decrease():void{
    this.quantity.update(q => Math.max(0,q - 1));
  }

  // Bouton radio
  setDiscount(value:number):void{
    this.discountCode.set(value);
  }
  setShipping():void{
    this.isExpressShipping.set(!this.isExpressShipping());
    // console.log(this.isExpressShipping());
  }

  reset():void{
    this.quantity.set(1);
    this.discountCode.set(0);
    this.isExpressShipping.set(false);

  }

  
}
