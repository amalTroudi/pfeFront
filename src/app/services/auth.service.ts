import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  logout() {
    throw new Error('Method not implemented.');
  }
  geteUser() {
    throw new Error('Method not implemented.');
  }


  email: any;
  constructor(private http : HttpClient , public router: Router) { }
  public login(data:any): Observable<any> {
         return this.http.post('${environment.urlBackend}/sessions/', data);
      }
  public getAllusers(){
    return this.http.get('${environment.urlBackend}/registration' + ' users/')
  }
  deleteuser(id:any){
    return this.http.delete('${environment.urlBackend}deleteuser/' + id )
  }
  // addnewuser(data:any){
  //   return this.http.post<any>(environment.urlBackend + 'registrations/' , data)
  // }
  updateuser(id:string,newdata:any){
    return this.http.patch('${environment.urlBackend}updateuserebyadmin/' + id , newdata )
  }
  createuser(data:any)
{
return this.http.post('${environment.urlBackend}registrations/', data);
}
}
