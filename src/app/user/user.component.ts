import { Component , EventEmitter, input, Input, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
      // Preferred - Way - I (With Input Decorators)
      @Input({required:true}) user!: User;
      @Input({required:true}) selected!: boolean;
      @Output() select = new EventEmitter<string>();

      get imagePath(){
        return 'assets/users/' + this.user.avatar;
      }

      /*Way-II(Optional but not recommended because we can't change the value of the properties later) 
      avatar = input.required<string>();
       name = input.required<string>();
      
       imagePath = computed(()=>{
          return 'assets/users/' + this.avatar();
       })
      */

      onSelectUser(){
        this.select.emit(this.user.id)
      }
}
