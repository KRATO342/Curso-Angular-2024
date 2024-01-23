import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { CardComponent } from './card/card.component';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SlidebarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'Mi primer App ANGULAR';
  public ArregloTarjetas:Tarjeta[]=[];
  
  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:'Video 1', subtitulo:'Subtitulo Video 1', nro:1},
      {titulo:'Video 2', subtitulo:'Subtitulo Video 2', nro:2},
      {titulo:'Video 3', subtitulo:'Subtitulo Video 3'}
    ]
  }
  
  
  
}
