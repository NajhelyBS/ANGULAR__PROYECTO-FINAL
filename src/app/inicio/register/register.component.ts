import { Component, OnInit } from '@angular/core';


import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formRegister!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userservice:UserServiceService,
  ) {
    this.formRegister = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      roles: new FormControl(),
      email: new FormControl(),
      password:new FormControl(),
        })
  }
 

  // | dando validaciones
  ngOnInit(): void {
        

    this.formRegister = this.formBuilder.group({
      'name': new FormControl ("", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      'apellido': new FormControl ("", [Validators.required,Validators.pattern('^[A-Z][a-z]*(\s[A-Z][a-z]*)+$')]), 
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'website': new FormControl ("", [Validators.required, Validators.pattern('^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')]),
    });

  }
  //dando validaciones |


  // | Mensajes de errores de validación

  getErrorName () {
    if (this.formRegister.controls['name'].hasError('required')) {
      return 'The name is required';
    } else if (this.formRegister.controls['name'].hasError('minlength')) {
      return 'It needs to be at least 3 characters'
    } 

    return 'It can have a maximum of 25 characters';

  }

  getErrorApellido () {
    if (this.formRegister.controls['apellido'].hasError('required')) {
      return 'The last names are required';
    }

    return this.formRegister.controls['apellido'].hasError('pattern') ? 'You must put your two last names' : '';
  
  }


  getErrorMessage() {
    if (this.formRegister.controls['email'].hasError('required')) {
      return 'The email is required';
    }

    return this.formRegister.controls['email'].hasError('email') ? 'It needs to be a valid email' : '';
  
  }


  //Mensajes de erores de validación |


  onSubmit(){
    this.userservice.registerUser(this.formRegister.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch(error =>  console.log(error))
    
  }
}
