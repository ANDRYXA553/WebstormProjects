import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/userInterface";

@Injectable({
  providedIn: 'root'
})
export class UsersFetchService  {

   usersUrl:string='https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User[]>{

  return this.httpClient.get<User[]>(this.usersUrl)
  }


}
