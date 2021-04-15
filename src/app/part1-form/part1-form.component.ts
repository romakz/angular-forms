import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-part1-form',
  templateUrl: './part1-form.component.html',
  styleUrls: ['./part1-form.component.scss']
})
export class Part1FormComponent implements OnInit {
  varForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.varForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.log(this.varForm.getRawValue());
    this.initForm();
  }
}
