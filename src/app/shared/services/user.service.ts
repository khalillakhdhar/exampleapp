import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{

    return this.http.get<User[]>(this.apiUrl);

  }
  getUserById(id:number):Observable<User>{

    return this.http.get<User>(`${this.apiUrl}/${id}`);

  }
  createUser(user:User):Observable<User>{

    return this.http.post<User>(this.apiUrl,user);

  }
  updateUser(user:User):Observable<User>{

    return this.http.put<User>(`${this.apiUrl}/${user.id}`,user);

  }
  deleteUser(id:number):Observable<any>{

    return this.http.delete<any>(`${this.apiUrl}/${id}`);

  }


}
