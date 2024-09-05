import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();

  user = input.required<User>();
  isUserSelected = input.required<boolean>();
  select = output<string>();

  imagePath = computed<string>(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}
