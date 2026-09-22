import { Component } from '@angular/core';

interface User{
  id:number,
  name:string,
  age:number,
  image:string,
  bio:string,
  status:string,
  github:string,
}

function stat():number {
    const nbR=Math.floor(Math.random() * 2);
    return nbR;
}

@Component({
  imports: [],
  selector: 'app-ex-attribute-binding',
  styleUrl: './ex-attribute-binding.css',
  templateUrl: './ex-attribute-binding.html',
})
export class ExAttributeBinding {
  isImageLoading: boolean = true;
  
  user:User={
    id:1,
    name: "Olivier Dalle Carbonare",
    age: 26,
    image: 'https://picsum.photos/400/200',
    bio: "Le meilleur de tous et vous n'avez pas votre mots a dire",
    status: stat()===0 ?"offLigne":"onLigne",
    github:"https://github.com/",
  }
}