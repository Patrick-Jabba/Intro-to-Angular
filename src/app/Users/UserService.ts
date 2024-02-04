import { Injectable } from "@angular/core";
import { IUser } from "./User";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  getUsers(): IUser[]{
    return [{
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
    }]
  };
}
