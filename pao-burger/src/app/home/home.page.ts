import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{


  public cardapio1 = [
    {cod: 1, nome: 'Moda da Casa', Detalhes: 'Burger mais famoso da casa, uma explosão de sabores, com muito pão e cheddar.'},
    {cod: 2, nome: 'Burger Não sei o nome', Detalhes: 'Ao contrario do nome, esse burger é um dos melhores da casa, com dois hambúrgueres e bacon.'},
    {cod: 3, nome: 'Burger Socorro', Detalhes: 'Como o nome diz, ao pedir esse burger você precisará de ajuda, pois é o lanche mais gorduroso da casa.'},
  ] 

  @ViewChild(IonSegment) segment:IonSegment;
  constructor() {}

  ngOnInit(){ 
    this.segment.value = 'burger';
  }

  segmentChanged( event:any){
    const valorSegmento = event.detail.value;
    console.log(valorSegmento);
  }


}
