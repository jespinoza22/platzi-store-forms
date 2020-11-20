import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('', Validators.required);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  coloField = new FormControl('');
  dateField = new FormControl('');
  categorieField = new FormControl('category-2');
  tagField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInValid() {
    return this.nameField.touched && this.nameField.invalid;
  }
}
