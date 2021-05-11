import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public list = [
    { name: 'Baguette', quantity: '1'},
    { name: 'Bières', quantity: '12'},
    { name: 'Pommes', quantity: '3'},
    { name: 'Lait', quantity: '5'},
    { name: 'Eau', quantity: '6'},
  ];

  getList() {
    return this.list;
  }
  constructor() { }
}
