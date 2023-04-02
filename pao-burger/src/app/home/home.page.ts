import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{


  public cardapio1 = [
    {cod: 1, nome: 'Moda da Casa', valor: "R$32,90", Detalhes: 'Burger mais famoso da casa, uma explosão de sabores, com muito pão e cheddar.', imagem:'assets/burger1.jpg'},
    {cod: 2, nome: 'Burger Não sei o nome',valor : "R$38,90", Detalhes: 'Ao contrario do nome, esse burger é um dos melhores da casa, com dois hambúrgueres e bacon.',  imagem:'assets/burger5.jpg'},
    {cod: 3, nome: 'Burger Socorro',valor: "R$35,90",  Detalhes: 'Como o nome diz, ao pedir esse burger você precisará de ajuda, pois é o lanche mais gorduroso da casa.', imagem:'assets/burger3.jpg'},
  ] 

  public cardapio2 = [
    {cod: 1, nome:'Cheddar de monte', valor:'R$20,45', Detalhes: 'Batata com MUITO cheddar, caso você escolher não irá se repender.', imagem:'assets/teste3.jpg' },
    {cod: 2, nome:'Diferente do igual', valor:'R$26,90', Detalhes: 'Uma batata diferente, como o nome diz uma batata diferente, empanada com muito sabor.', imagem:'assets/batata4.jpg'},
    {cod: 3, nome:'Torre de Batata', valor:'R$30,40', Detalhes: 'Torre de batata, rechado com cheddar bacon, calabresa, catupiry e muita batata frita.', imagem:'assets/teste1.jpg'}
  ]

  constructor() {}

  ngOnInit(){ 
  }

  public cardapioImg = '../../assets/imagens/';

  public segment = '0';

}
