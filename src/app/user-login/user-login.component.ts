import { Component } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user:User = new User();

  constructor(private loginUserService: LoginUserService) { }
  userLogin() {
    this.loginUserService.loginUser(this.user).subscribe(data=>{
      alert("Login Successful.");
    },error=>{
      alert("Wrong ID or(and) Password. Please enter the correct User ID and Password.")
    });
  }
}
