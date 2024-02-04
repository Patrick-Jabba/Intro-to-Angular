import { Component, OnInit } from "@angular/core";
import { IUser } from "./User";
import { UserService } from "./UserService";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  pageTitle: string = "User List Title - by Patrick";
  filteredUsers: IUser[] = [];
  users: IUser[] = [];
  isPhoneNumberVisible: boolean = true;
  private _listFilter: string = '';

  constructor(private userService: UserService){}


  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    // Adding the filtration process
    this.filteredUsers = this.performFiltration(value);
  }

  // Defining a new method
  showNumbers(): void {
    this.isPhoneNumberVisible = !this.isPhoneNumberVisible;
  }

  ngOnInit(): void {
    this.listFilter = '';
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  performFiltration(filterBy: string): IUser[]{
    filterBy = filterBy.toLowerCase();

    return this.users.filter((user: IUser) => user.fullName.toLocaleLowerCase().includes(filterBy));
  }

  onStarClicked(message: string): void{
    this.pageTitle = `User list ${message}`;
  }
}
