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

  formLogin!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private userservice:UserServiceService,
  ) {

    
  }
 
  // | dando validaciones
  ngOnInit(): void {
        
    this.formRegister = this.formBuilder.group({
      'name': new FormControl ("", [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      'apellido': new FormControl ("", [Validators.required,]), 
      'selectedOption': new FormControl("",[Validators.required]),      
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'password': new FormControl ("", [Validators.required,]),
    });

  }
  //dando validaciones |


  
  onSubmit(){
    console.log(this.formRegister.value);
  }

  onInto(){

  }
}
