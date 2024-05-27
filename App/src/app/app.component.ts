import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'App';

  users: any[] = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}