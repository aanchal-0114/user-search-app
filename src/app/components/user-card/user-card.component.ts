import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-card',
  standalone:true,
  imports: [MatCardModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: any;
  ngOnInit(){
    console.log("event "+this.user);
  }
}
