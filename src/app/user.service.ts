import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users= [
    {id: 1, name: 'BTC'},
    {id: 2, name: 'XRP'}
  ];
  constructor() { }

  getMyItems()
  {
    return this.users;
  }
}
