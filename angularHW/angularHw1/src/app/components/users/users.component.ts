import { Component, OnInit } from '@angular/core';
import {UsersFetchService} from "../../services/users-fetch.service";
import {User} from "../../models/userInterface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users:User[]

  constructor(private userFetchService:UsersFetchService) { }

  ngOnInit(): void {
    this.userFetchService.getUsers().subscribe(value => {
      this.users=value
    })
  }

}
