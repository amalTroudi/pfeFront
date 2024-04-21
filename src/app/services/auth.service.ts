import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout() {
    throw new Error('Method not implemented.');
  }
  getUser() {
    throw new Error('Method not implemented.');
  }


  email: any;
  constructor(private http : HttpClient , public router: Router) { }
  
  public getAllusers(){
    return this.http.get(environment.urlBackend + 'employees/')
  }

  public login(data:any): Observable<any> {
    return this.http.post(environment.urlBackend + 'sessions/', data);
  }
  deleteUser(id:any){
    return this.http.delete(environment.urlBackend+'deleteemployee/' + id )
  }
  addnewUser(data:any){
    return this.http.post<any>(environment.urlBackend + 'registrations/' , data)
  }
  updateUser(id:string,newdata:any){
    return this.http.patch(environment.urlBackend+'updateemployeebyadmin/' + id , newdata )
  }
  createuser(data:any)
{
return this.http.post(environment.urlBackend+'registrations/', data);
}


}
