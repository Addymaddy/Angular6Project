import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
        email: [''],
        skills: this.fb.group({
          skillName: [''],
          experienceInYears: [''],
          proficiency: ['']
        })
      }
    )
  }

  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: "Ahmed Hashmi",
      email: "ahmed.rocks72@gmail.com",
      skills: {
        skillName: 'Java',
        experienceInYears: 5,
        proficiency: 'beginner'
      }
    })
  }
  onSubmit(): void {
    console.log(this.employeeForm.value);
  }

}
