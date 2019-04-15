import { Component, OnInit } from '@angular/core';
//import {Component,OnInit} from '@angular/core';
import {Car} from '../display-user-data/cars';
//import {CarService} from '../../service/carservice';
/* import {UserInfoModel} from '../models/UserInfoModel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from '../user.service';
import { DataTable, Column, SelectItem } from 'primeng/primeng'; */
import {MessageService} from 'primeng/api';
import { log } from 'util';




@Component({
  selector: 'app-display-user-data',
  templateUrl:'./display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss']
})
export class DisplayUserDataComponent implements OnInit {
  displayDialog: boolean;

    car: Car = new PrimeCar();
    selectedCar2: Car;
    selectedCar: Car;
    selectedCar3:Car;
  //  isDisabled:boolean;
    newCar: boolean;
    cols: any[];
    items:any[];

    cars: Car[]=[{vin:1,year:2011,brand:"BMW",color:"red"},
    {vin:2,year:2015,brand:"Ferrari",color:"Black"},
    {vin:3,year:2018,brand:"Honda",color:"red"},
  ];

    constructor(private messageService: MessageService) { }

    ngOnInit() {
       // this.carService.getCarsSmall().then(cars => this.cars = cars);
           // this.isDisabled=true;
       this.cols = [
        { field: 'vin', header: 'Vin' },
        {field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
      
    ];
    this.items = [
        { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedCar3) },
        { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar3) }
    ];
    }
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        let cars = [...this.cars];
        if(this.newCar)
            cars.push(this.car);
        else
            cars[this.findSelectedCarIndex()] = this.car;
        
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        let index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val,i) => i!=index);
        this.car = null;
        this.displayDialog = false;
    }    
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        let car = new PrimeCar();
        for(let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
    selectCarWithButton(car1: Car) {
        this.newCar = false;
        this.car = car1;
        this.displayDialog = true;
        console.log(car1);
    }
    selectCarWithButton2(car1: Car) {
       // this.cars = this.cars.filter((val,i) => i!=index);
       let index = this.cars.indexOf(car1);
       console.log(car1);
       console.log(index);

       this.cars = this.cars.filter((val,i) => i!=index);  //for deleting value 
      // this.car=car1;
        this.car = null;
        this.displayDialog = false;
    }

    viewCar(car1: Car) {
       /*  this.newCar = false;
        this.car = car1;
        this.displayDialog = true; */
        console.log(car1);
        this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car1.vin + ' - ' + car1.brand });
    }

    deleteCar(car: Car) {
        let index = -1;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        console.log(index);
        

       this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    }

}

class PrimeCar implements Car {
    
    constructor(public vin?, public year?, public brand?, public color?) {}
}
