import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from '../live/live.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
