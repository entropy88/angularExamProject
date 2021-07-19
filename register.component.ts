import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
   email: '',
    password: '',
    rePassword:''
  });
  

  constructor(  private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(): void {
  
    const email=this.checkoutForm.value.email;
    const password=this.checkoutForm.value.password;
    const rePassword=this.checkoutForm.value.rePassword;
    if (password!==rePassword){
      alert("Passwords must match!")
    }

    console.log(email, password,rePassword)


  }

}
