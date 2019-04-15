import { Component, OnInit,Input ,Output,OnDestroy} from '@angular/core';
import {DisplayUserDataComponent} from '../display-user-data/display-user-data.component'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-display-user-detail',
  templateUrl: './display-user-detail.component.html',
  styleUrls: ['./display-user-detail.component.scss']
})
export class DisplayUserDetailComponent implements OnInit {
 @Input() users: User[] = [];
 @Input() display:boolean;
 @Output() displayChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
   // this.display=false;
  }
  onClose(){
    this.display=false;
   // this.displayChange.emit(false);
  }
  addUser(id,name,email){
    let user = new User(id,name,email);
    
    this.users.push(user);
}
ngOnDestroy() {
  //this.displayChange.unsubscribe();
}
}
export class User {
  id:string;
  name:string;
  email:string;
  constructor(id,name,email){
    this.id = id;
    this.name = name;
    this.email = email;
}
}
//@Input() display: boolean;





