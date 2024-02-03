import { Component, OnInit } from "@angular/core";
import { IUser } from "./User";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  pageTitle: string = "User List Title - by Patrick";
  filteredUsers: IUser[] = [];
  users: IUser[] = [
    {
      "userId": 1,
      "fullName": "Patrick Monteiro",
      "email": "patrick@email.com",
      "phone": "123123",
      "country": "Brazil",
      "cookingRating": 4
    },
    {
      "userId": 2,
      "fullName": "Mohamad Lawand",
      "email": "mohamad@email.com",
      "phone": "111222",
      "country": "Lebanon",
      "cookingRating": 1
    },
    {
      "userId": 3,
      "fullName": "José Avelino",
      "email": "jose@email.com",
      "phone": "333111",
      "country": "Fonte Santa",
      "cookingRating": 3
    },
  ];
  isPhoneNumberVisible: boolean = true;
  private _listFilter: string = '';

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
  }

  performFiltration(filterBy: string): IUser[]{
    filterBy = filterBy.toLowerCase();

    return this.users.filter((user: IUser) => user.fullName.toLocaleLowerCase().includes(filterBy));
  }
}
