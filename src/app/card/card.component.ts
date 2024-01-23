import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
public image: string="https://i.pinimg.com/736x/e1/78/46/e17846c92e894cf6434c6d5bc121f9d5.jpg"
public Titulo:string="Curso de Angular";

constructor(){}

ngOnInit(): void{

}
}
