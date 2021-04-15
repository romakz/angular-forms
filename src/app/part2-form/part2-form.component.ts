import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2-form',
  templateUrl: './part2-form.component.html',
  styleUrls: ['./part2-form.component.scss']
})
export class Part2FormComponent implements OnInit {
  form1: MyForm1;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form1 = {
      form2: {
        form2Line: '',
        form21: {
          form21Line: ''
        },
        form22: {
          form22ine: ''
        }
      },
      form3: {
        form3Line: '',
        form31: {
          form31Line: ''
        }
      },
      form4: {
        form4Line: '',
        form41: {
          form41Line: ''
        }
      }
    };
  }

  submit() {
    console.log(this.form1);
    this.initForm();
  }
}

export class MyForm1 {
  form2: MyForm2;
  form3: MyForm3;
  form4: MyForm4;
}

export class MyForm2 {
  form2Line: string;
  form21: MyForm21;
  form22: MyForm22;
}

export class MyForm21 {
  form21Line: string;
}

export class MyForm22 {
  form22ine: string;
}

export class MyForm3 {
  form3Line: string;
  form31: MyForm31;
}

export class MyForm31 {
  form31Line: string;
}

export class MyForm4 {
  form4Line: string;
  form41: MyForm41;
}

export class MyForm41 {
  form41Line: string;
}
