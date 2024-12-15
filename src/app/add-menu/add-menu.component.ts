import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuServiceService } from '../services/menu-service.service';
import { Menu } from '../core/models/Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {

  menu! :Menu;
  menuForm = new FormGroup({
    id : new FormControl(),
    title : new FormControl('',Validators.required),
    image : new FormControl(),
    description : new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  constructor(private service : MenuServiceService, private router:Router){

  }
  add(){
    if(this.menuForm.valid){
      this.menu = this.menuForm.value as Menu;
      this.menu.approved = false;
      this.menu.reservations = [];
      this.service.addMenu(this.menu).subscribe({
        next:()=>console.log(this.menu),
        error:(err)=>console.log(err),
        complete:()=>this.router.navigate(['/home'])
      })
    }else{
      console.log("form invalid")
    }
  }
}
