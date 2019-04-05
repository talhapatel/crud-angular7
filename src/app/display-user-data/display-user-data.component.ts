import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../models/UserInfoModel';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {

  user: UserInfoModel = new UserInfoModel({guid: "D21ds12x", 
		customerUid: "c101", 
		first_name: "Talha", 
		last_name: "Patel", 
		email: "Talha@email.com", 
		zipcode: 10283,
		password: "Idasn2x2#"});

  constructor() { }

  ngOnInit() {
  }

}
