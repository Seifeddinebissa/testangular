import { Menu } from './../core/models/Menu';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  
  constructor(private http : HttpClient) { }

  addMenu(menu: Menu):Observable<Menu>{
    return this.http.post<Menu>('http://localhost:3000/menus',menu);
  }
  getAllMenus():Observable<any>{
    return this.http.get('http://localhost:3000/menus');
  }
  getById(id :number):Observable<Menu>{
    return this.http.get<Menu>('http://localhost:3000/menus/'+id.toString())
  }
  reserver(id: number,m :Menu):Observable<Menu>{
    return this.http.patch<Menu>('http://localhost:3000/menus/'+id.toString(),m); 
   }

}
