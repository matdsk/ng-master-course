import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { type User } from './user/user.model';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUserId = signal<string>('');

  selectedUser = computed(() => {
    return this.users.find((user) => user.id === this.selectedUserId());
  });

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
