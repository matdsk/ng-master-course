import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';

export interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();

  user = input.required<User>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  select = output<string>();

  imagePath = computed<string>(() => {
    return 'assets/users/' + this.user().avatar;
  });

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}
