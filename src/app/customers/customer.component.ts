import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['',[Validators.required , Validators.minLength(3)]],
      lastName: '',
      email: '',
      sendCatalog: true,
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Bella',
      lastName: 'Will',
      sendCatalog: false,
    });
  }


  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}


