import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    email: '',
     password: ''   
   });
  exUser: any;

  constructor(private formBuilder: FormBuilder, private db:AngularFireDatabase,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  
    const email=this.checkoutForm.value.email;
    const password=this.checkoutForm.value.password;
  

  const emailPattern=new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
   console.log(emailPattern.test(email))
    if (!emailPattern.test(email)){
      alert("Невалиден имейл!")
    } else {
 
     this.db.list('/users', ref => 
        ref.orderByChild('email').equalTo(email))
        .valueChanges()
        .subscribe(result => {
         this.exUser=result[0];
         console.log(this.exUser)
        });
       

}

        

       

        // localStorage.setItem('loggedUserEmail', email)
        // this.router.navigate(['']);
      }
  }


