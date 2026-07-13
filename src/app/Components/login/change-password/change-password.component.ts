import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  password={

newPassword:'',

confirmPassword:''

};

  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
    
  }


  changePassword(){

if(this.password.newPassword==""){

alert("Enter Password");

return;

}

if(this.password.newPassword!=this.password.confirmPassword){

alert("Password does not match");

return;

}

let data={

userId:Number(localStorage.getItem("userId")),

newPassword:this.password.newPassword

};

this.service.changePassword(data).subscribe((res:any)=>{

alert(res.message);

localStorage.setItem("isFirstLogin","false");

this.router.navigate(['/broker-dashboard']);

});

}


}
