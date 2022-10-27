import { Component, ViewChild} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "../models/customer";

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent{
    customers: Array<Customer>;
    isAddNew: Boolean;

    firstName = '';
    lastName = '';
    @ViewChild("myForm") customerForm!: NgForm;

    constructor(){
        this.isAddNew = false;
        this.customers = new Array<Customer>();
        this.customers.push(new Customer("Martine", "Marcelin"));
        this.customers.push(new Customer("Fabrice", "Marcelin"));
        this.customers.push(new Customer("Thierry", "Marcelin"));
    }

    save(){
        this.customers.push(new Customer(this.firstName, this.lastName));
        this.isAddNew = false;
        this.reset();
    }
    
    addNew(){
        this.isAddNew = true;
    }

    cancel(){
        this.isAddNew = false;
        this.reset();
    }

    reset(){
        this.customerForm.reset();
    }
}