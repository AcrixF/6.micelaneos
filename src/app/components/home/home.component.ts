import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-style></app-ng-style> 

     <app-css></app-css> 

    <app-clases></app-clases>


     <p [appResaltado]="'orange'">

       Hola mundo

     </p>


     <app-ng-switch></app-ng-switch>



     <button type="button" (click)="alerta='success'" class="btn btn-default">Cambiar</button>

     <div [ngSwitch]="alerta">
       <div *ngSwitchCase="'success'" class="alert alert-success" role="alert">
         <strong>Well done!</strong> You successfully read this important alert message.
       </div>
       <div *ngSwitchCase="'info'" class="alert alert-info" role="alert">
         <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
       </div>
       <div *ngSwitchCase="'warning'" class="alert alert-warning" role="alert">
         <strong>Warning!</strong> Better check yourself, you're not looking too good.
       </div>
       <div *ngSwitchDefault class="alert alert-danger" role="alert">
         <strong>Oh snap!</strong> Change a few things up and try submitting again.
       </div>

     </div>



  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
