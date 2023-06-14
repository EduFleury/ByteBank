import { TransferenciaService } from './../services/TransferenciaService';
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {

  transferencias: any[] = [];

  constructor(private service: TransferenciaService){

  }

  ngOnInit(){
   this.transferencias =  this.service.transferencias;
  }

  imports: [
    CommonModule
  ]
}
