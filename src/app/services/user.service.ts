import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRegister, UserLogin } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = "https://localhost:7108/api/User/";

  constructor(private _client: HttpClient) { }

getUser(id:number) : Observable<User>
{
    return this._client.get<User>(this.url+id);
}
Register(user:UserRegister):Observable<any>
{
  return this._client.post(this.url+"Register",user);
}
Login(user :UserLogin): Observable<string>
{
  return this._client.post<string>(this.url+"Login",user);
}
DeleteUser(id: number): Observable<boolean>
{
  return this._client.delete<boolean>(this.url+id);
}
UpdateUser(id :number,user :UserRegister): Observable<boolean>
{
  return this._client.patch<boolean>(this.url+id,user);
}
GetAllUser():Observable<User[]>
{
  return this._client.get<User[]>(this.url + "GetAll");
}
}
