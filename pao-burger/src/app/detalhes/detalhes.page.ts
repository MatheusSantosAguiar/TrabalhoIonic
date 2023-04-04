import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public detalhesImg = '../../assets/imagens/';
 
  public quantidade = 0;
  
  public detalhes = { 
    
    nome        : '',
    categoria   : 0,
    descricao   : '', 
    valor       : '', 
    imagens     : '', 
    visibled    :false,

  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.detalhes = params['detalhes'];
    });
  }

  public add(){
    this.quantidade += 1;
  }

  public remove(){
    if(this.quantidade > 0){
      this.quantidade -= 1;
    }
  }

  ngOnInit() {
  }

}