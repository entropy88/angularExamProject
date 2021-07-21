import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
  

  constructor(  private formBuilder: FormBuilder, private db:AngularFireDatabase) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(): void {
  
    const email=this.checkoutForm.value.email;
    const password=this.checkoutForm.value.password;
    const rePassword=this.checkoutForm.value.rePassword;

    const emailPattern=new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
   console.log(emailPattern.test(email))
    if (!emailPattern.test(email)){
      alert("Невалиден имейл!")
    } else if (password!==rePassword){
      alert("Паролите не съвпадат!")
    } else {
        console.log(email, password,rePassword);
        //check if user exist and only then create new one
        const users = this.db.list('users');
        users.push({
          email, password
        })

      }
  }

}
