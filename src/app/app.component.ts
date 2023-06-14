import { TransferenciaService } from "./services/TransferenciaService";
import { Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  transferir($event): void{
    this.service.adicionar($event);
  }
}
