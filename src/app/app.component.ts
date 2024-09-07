import { Component, computed, signal } from '@angular/core';
import { type User } from './user/user.model';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
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
