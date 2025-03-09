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
  addUser()
  {
    this.userService.createUser(this.user).subscribe(response=>{
   // for fake api
      this.users.push(response)

      this.user={} as User;
      alert("ajouté avec succès");
    });
  }
  deleteOneUser(user:User)
  {
    if(confirm("voulez vous supprimer: "+user.name))
    {
      this.userService.deleteUser(user.id || 0).subscribe(response=>{
// for fake api
        let index=this.users.indexOf(user);
        this.users.splice(index,1);
      });
    }


  }

}
