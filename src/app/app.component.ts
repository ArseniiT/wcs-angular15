import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        firstName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
        secondName: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(20)]],
        credentials: this.formBuilder.group({
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(8)]],
        })
      });
  }

  submit(){
    console.log(this.userForm.value);
  }

}
