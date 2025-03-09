import { Component } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users:User[]=[];
  user={} as User;
  constructor(private userService:UserService) { }
  ngOnInit() {

    this.getAllUsers();
  }
  getAllUsers()
  {
    this.userService.getUsers().subscribe(response=>this.users=response);
  }

}
