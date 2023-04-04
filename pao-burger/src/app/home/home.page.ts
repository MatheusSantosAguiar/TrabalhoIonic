import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{


  public cardapio1 = [
    {cod: 1, nome: 'Moda da Casa', valor: "R$32,90", Detalhes: 'Burger mais famoso da casa, uma explosão de sabores, com muito pão e cheddar.', imagem:'burger1.jpg', visibled: false},
    {cod: 2, nome: 'Burger Não sei o nome',valor : "R$38,90", Detalhes: 'Ao contrario do nome, esse burger é um dos melhores da casa, com dois hambúrgueres e bacon.',  imagem:'burger5.jpg', visibled: false},
    {cod: 3, nome: 'Burger Socorro',valor: "R$35,90",  Detalhes: 'Como o nome diz, ao pedir esse burger você precisará de ajuda, pois é o lanche mais gorduroso da casa.', imagem:'burger3.jpg', visibled: false},
  ] 

  public cardapio2 = [
    {cod: 1, nome:'Cheddar de monte', valor:'R$20,45', Detalhes: 'Batata com MUITO cheddar, caso você escolher não irá se repender.', imagem:'teste3.jpg', visibled: false},
    {cod: 2, nome:'Diferente do igual', valor:'R$26,90', Detalhes: 'Uma batata diferente, como o nome diz uma batata diferente, empanada com muito sabor.', imagem:'batata4.jpg', visibled: false},
    {cod: 3, nome:'Torre de Batata', valor:'R$30,40', Detalhes: 'Torre de batata, rechado com cheddar bacon, calabresa, catupiry e muita batata frita.', imagem:'teste1.jpg', visibled: false}
  ]

  public categoria = [
    { id: '1', detalhes: this.cardapio1 },
    { id: '2', detalhes: this.cardapio2 }  
  ]
  public cardapioImg = '../../assets/';

  public segment = '1';
  
  constructor(private navCtrl: NavController) {}

 

  public verDetalhes(detalhes:any) {
    this.navCtrl.navigateForward('detalhes', {
      queryParams: { detalhes: detalhes }
    });
  }



}
