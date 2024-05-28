import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @description
 * UserService handles the retrieval of user data from the backend API.
 * It provides methods to interact with the user-related endpoints of the API.
 * The service uses Angular's HttpClient to make HTTP requests.
 *
 * @example
 * import { UserService } from './user.service';
 *
 * @Component({
 *   selector: 'app-user-list',
 *   templateUrl: './user-list.component.html'
 * })
 * export class UserListComponent implements OnInit {
 *   users: any[] = [];
 *
 *   constructor(private userService: UserService) {}
 *
 *   ngOnInit() {
 *     this.userService.getUsers().subscribe(data => {
 *       this.users = data;
 *     });
 *   }
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @description
   * The base URL for the API endpoint.
   * This URL is used to construct the full endpoint URLs for the API requests.
   */
  private apiUrl = 'http://localhost:8000';

  /**
   * @description
   * Constructs a new UserService.
   *
   * @param http - An instance of HttpClient, which is used to make HTTP requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @description
   * Retrieves a list of users from the backend API.
   *
   * @returns An Observable that emits the list of users when the HTTP request completes.
   */
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
