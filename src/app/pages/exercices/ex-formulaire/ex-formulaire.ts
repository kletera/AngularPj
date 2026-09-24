import { Component, computed, signal, effect } from '@angular/core';

const EMAIL_REGEX=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/);
const PASSWORD_REGEX=(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/);
const PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/;

@Component({
  imports: [],
  selector: 'app-ex-formulaire',
  styleUrl: './ex-formulaire.css',
  templateUrl: './ex-formulaire.html',
})
export class ExFormulaire {
  email = signal<string>("");
  password = signal<string>("");
  phone = signal<string>("");
  showPassword = signal<boolean>(false);
  
  isEmailValid = computed(() => EMAIL_REGEX.test(this.email()));
  isPasswordValid=computed(()=> PASSWORD_REGEX.test(this.password()));
  isPhoneValid=computed(() => PHONE_REGEX.test(this.phone()));

  isFormValid= computed(()=> this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid());

  inPassword(event:Event){
    const target = event.target as HTMLInputElement;
    this.password.set(target.value);
    console.log(this.password())
    
  }

  inEmail(event:Event){
    const target = event.target as HTMLInputElement;
    this.email.set(target.value);
    console.log(this.email())
  }
  inPhone(event:Event){
    const target = event.target as HTMLInputElement;
    this.phone.set(target.value);
    console.log(this.phone())
  }

  pwdStrenght=computed(()=>{
    let score = 0;
    if (this.password.length >= 8) score++;
    if (/[a-z]/.test(this.password())) score++;
    if (/[A-Z]/.test(this.password())) score++;
    if (/\d/.test(this.password())) score++;
    if (/[@$!%?&]/.test(this.password())) score++;

    switch(score){
      case 1:return {libelle:"Faible",color:'progress-error',score:1};
      case 2:return {libelle:"Moyen",color:'progress-warning',score:2};
      case 3:return {libelle:"Fort",color:'progress-warning',score:3};
      case 4:return {libelle:"Très fort",color:'progress-success',score:4};
      default:return {libelle:"",color:'',score:0};

    }
  });

  // constructor() {
  //   // 3. EFFECT : Journalisation de l'état de validité
  //   effect(() => {
  //     console.log(`[FORM LOG] Formulaire valide : ${this.isFormValid()}`);
  //   });
  // }

  toggleShowPassword(): void {
    this.showPassword.update((show) => !show);
  }

}
