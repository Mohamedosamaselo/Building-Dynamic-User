import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() user!  : any ; 
  @Output() selectedID = new EventEmitter();

  gotoDetails(id:number){
   this.selectedID.emit(id)
  }
  
}
