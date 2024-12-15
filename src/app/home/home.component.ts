import { Component } from '@angular/core';
import { Menu } from '../core/models/Menu';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  menus : Menu[]=[];
  menuFilter:Menu[]=[];
  resvar!:Menu;
  static userID:number = 22;
  constructor(private service : MenuServiceService){}
  
  ngOnInit(){
    this.service.getAllMenus().subscribe({
      next:(data)=>this.menus = data as Menu[],
      error:(err)=>console.log(err),
      complete:()=>console.log(this.menus)
    })
    //this.menus = this.menuFilter.filter(m => m.approved = false)
  }
  reserver(id:number){
    
   this.service.getById(id).subscribe({
    next:(data)=>{
      this.resvar = data,
      this.resvar.reservations.push(HomeComponent.userID)
    },
    complete:()=>this.service.reserver(id,this.resvar).subscribe({
      next:(data)=>console.log(data)
    })
   })
  }
}
